// thermomind-continuity/src/index.js

class ThermoMind {
  constructor({ apiKey, baseUrl } = {}) {
    if (!apiKey) {
      throw new Error("ThermoMind: Missing API key");
    }

    this.apiKey = apiKey;
    this.base =
      baseUrl ||
      process.env.THERMO_URL ||
      "https://thermomind-production.up.railway.app";
  }

  async _get(path) {
    const res = await fetch(this.base + path, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
      },
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`ThermoMind GET ${path} failed: ${res.status} — ${text}`);
    }

    return res.json();
  }

  async _post(path, body) {
    const res = await fetch(this.base + path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`ThermoMind POST ${path} failed: ${res.status} — ${text}`);
    }

    return res.json();
  }

  // Create a persistent session
  async createSession({ externalId = null, metadata = {} } = {}) {
    return this._post("/v1/sessions", {
      external_id: externalId,
      metadata,
    });
  }

  // Append an event (message, action, observation)
  async appendEvent(sessionId, event) {
    if (!sessionId) throw new Error("Missing sessionId");
    return this._post(`/v1/sessions/${sessionId}/events`, event);
  }

  // Get continuity metrics (surplus, drift, stability, identity)
  async getState(sessionId) {
    if (!sessionId) throw new Error("Missing sessionId");
    return this._get(`/v1/sessions/${sessionId}/state`);
  }

  // Store long-term memory
  async writeMemory(sessionId, memory) {
    if (!sessionId) throw new Error("Missing sessionId");
    return this._post(`/v1/sessions/${sessionId}/memory`, memory);
  }

  // Query memory
  async queryMemory(sessionId, query = "", limit = 10) {
    if (!sessionId) throw new Error("Missing sessionId");
    return this._get(
      `/v1/sessions/${sessionId}/memory?query=${encodeURIComponent(query)}&limit=${limit}`
    );
  }

  // Get continuity-aware guidance for LLM prompting
  async getGuidance(sessionId, { context = "", max_hints = 3 } = {}) {
    if (!sessionId) throw new Error("Missing sessionId");
    return this._post(`/v1/sessions/${sessionId}/guidance`, {
      context,
      max_hints,
    });
  }

  /**
   * THE GAME GENIE INTERCEPTOR
   * Wraps an OpenAI client instance so memory injections happen seamlessly.
   */
  wrapOpenAI(openaiClient) {
    const tmInstance = this;
    
    // We intercept the normal openai.chat.completions.create call
    const originalCreate = openaiClient.chat.completions.create.bind(openaiClient.chat.completions);

    openaiClient.chat.completions.create = async function (params) {
      // Look for a thermoSessionId passed into the request options
      const sessionId = params.thermoSessionId;
      if (!sessionId) {
        // If they didn't pass a session ID, just run standard stateless OpenAI
        return originalCreate(params);
      }

      // Extract the newest user message text
      const messages = params.messages || [];
      const lastUserMsg = [...messages].reverse().find(m => m.role === 'user');
      const userContent = lastUserMsg ? lastUserMsg.content : "";

      // 1. AUTO-LOG the incoming user message to ThermoMind
      if (userContent) {
        await tmInstance.appendEvent(sessionId, {
          type: "message_user",
          content: userContent,
          role: "user"
        });
      }

      // 2. AUTO-FETCH continuity-aware guidance/memories from your engine
      let systemGuidance = "";
      try {
        const guidance = await tmInstance.getGuidance(sessionId, { context: userContent });
        if (guidance && guidance.hints) {
          systemGuidance = `\n[ThermoMind Continuity Context]:\n${guidance.hints.join("\n")}`;
        }
      } catch (err) {
        console.warn("ThermoMind non-blocking warning: Failed to fetch guidance", err.message);
      }

      // 3. AUTO-INJECT memory context into the system prompt
      const modifiedMessages = [...messages];
      if (systemGuidance) {
        const sysIndex = modifiedMessages.findIndex(m => m.role === 'system');
        if (sysIndex !== -1) {
          modifiedMessages[sysIndex].content += systemGuidance;
        } else {
          modifiedMessages.unshift({ role: 'system', content: systemGuidance });
        }
      }

      // Strip out our custom parameter so OpenAI doesn't error out
      const { thermoSessionId, ...cleanParams } = params;
      cleanParams.messages = modifiedMessages;

      // 4. EXECUTE the regular LLM call with the new "hacked" continuous brain
      const response = await originalCreate(cleanParams);

      // 5. AUTO-LOG the assistant's reply back to ThermoMind to keep the loop unbroken
      const assistantReply = response.choices?.[0]?.message?.content;
      if (assistantReply) {
        await tmInstance.appendEvent(sessionId, {
          type: "message_assistant",
          content: assistantReply,
          role: "assistant"
        });
      }

      return response;
    };

    return openaiClient;
  }
}

module.exports = { ThermoMind };
