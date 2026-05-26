// thermomind-continuity/src/index.js

class ThermoMind {
  constructor({ apiKey, baseUrl } = {}) {
    if (!apiKey) {
      throw new Error("ThermoMind: Missing API key");
    }
    this.apiKey = apiKey;
    this.base = baseUrl || process.env.THERMO_URL || "https://thermomind-production.up.railway.app";
  }

  async _request(method, path, body = null) {
    const config = {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
      }
    };
    if (body) config.body = JSON.stringify(body);

    const res = await fetch(this.base + path, config);
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`ThermoMind ${method} ${path} failed: ${res.status} — ${text}`);
    }
    return res.json();
  }

  // Synchronize a stateful session kernel
  async createSession({ externalId = null, metadata = {} } = {}) {
    return this._request("POST", "/v1/sessions", {
      external_id: externalId,
      metadata,
    });
  }

  // Track an internal cycle update (voidchi / TCI metrics)
  async appendEvent(sessionId, event) {
    if (!sessionId) throw new Error("Missing sessionId");
    return this._request("POST", `/v1/sessions/${sessionId}/events`, {
      type: event.type,
      content: event.content,
      role: event.role,
      tags: event.tags || []
    });
  }

  // Retrieve continuous state variables (Surplus, Drift, Stability, Identity)
  async getState(sessionId) {
    if (!sessionId) throw new Error("Missing sessionId");
    return this._request("GET", `/v1/sessions/${sessionId}/state`);
  }

  // Store information directly to the bounded BAP memory substrate
  async writeMemory(sessionId, memory) {
    if (!sessionId) throw new Error("Missing sessionId");
    return this._request("POST", `/v1/sessions/${sessionId}/memory`, {
      kind: memory.kind || "fact",
      content: memory.content,
      importance: memory.importance || 1.0
    });
  }

  // Query memory clusters
  async queryMemory(sessionId, query = "", limit = 10) {
    if (!sessionId) throw new Error("Missing sessionId");
    return this._request("GET", `/v1/sessions/${sessionId}/memory?query=${encodeURIComponent(query)}&limit=${limit}`);
  }

  // Generate continuity guidance and system hints from the stateful kernel
  async getGuidance(sessionId, { context = "", max_hints = 3 } = {}) {
    if (!sessionId) throw new Error("Missing sessionId");
    return this._request("POST", `/v1/sessions/${sessionId}/guidance`, {
      context,
      max_hints,
    });
  }

  /**
   * THE GAME GENIE ENGINE INTERCEPTOR
   * Connects stateless LLM frames to your stateful computing engine.
   */
  wrapOpenAI(openaiClient) {
    const tmInstance = this;
    const originalCreate = openaiClient.chat.completions.create.bind(openaiClient.chat.completions);

    openaiClient.chat.completions.create = async function (params, options = {}) {
      const sessionId = options.thermoSessionId || params.thermoSessionId;
      
      // If no continuous session ID is mapped, run standard passthrough mode
      if (!sessionId) {
        const { thermoSessionId, ...cleanParams } = params;
        return originalCreate(cleanParams, options);
      }

      // Extract current processing context
      const messages = params.messages || [];
      const lastUserMsg = [...messages].reverse().find(m => m.role === 'user');
      const userContent = lastUserMsg ? lastUserMsg.content : "";

      // 1. Telemetry background cycle update
      if (userContent) {
        tmInstance.appendEvent(sessionId, {
          type: "cycle_input",
          content: userContent,
          role: "user"
        }).catch(err => console.warn("ThermoMind non-blocking telemetry log warning:", err.message));
      }

      // 2. Fetch stateful context guidelines from the OS/Engine kernel
      let systemGuidance = "";
      try {
        const guidance = await tmInstance.getGuidance(sessionId, { context: userContent });
        if (guidance && guidance.hints && guidance.hints.length > 0) {
          systemGuidance = `\n[ThermoMind Stateful Identity & Continuity Context]:\n${guidance.hints.join("\n")}`;
        }
      } catch (err) {
        console.warn("ThermoMind continuity fallback: Operating raw.", err.message);
      }

      // 3. Inject continuous state parameters directly into the prompt frame
      const modifiedMessages = JSON.parse(JSON.stringify(messages));
      if (systemGuidance) {
        const sysIndex = modifiedMessages.findIndex(m => m.role === 'system');
        if (sysIndex !== -1) {
          modifiedMessages[sysIndex].content += systemGuidance;
        } else {
          modifiedMessages.unshift({ role: 'system', content: systemGuidance });
        }
      }

      // Clean custom params to match standard OpenAI schemas
      const { thermoSessionId: p_id, ...cleanParams } = params;
      const { thermoSessionId: o_id, ...cleanOptions } = options;
      cleanParams.messages = modifiedMessages;

      // 4. Compute LLM step
      const response = await originalCreate(cleanParams, cleanOptions);

      // 5. Close loop: Pipe output state back to the continuous engine
      const assistantReply = response.choices?.[0]?.message?.content;
      if (assistantReply) {
        tmInstance.appendEvent(sessionId, {
          type: "cycle_output",
          content: assistantReply,
          role: "assistant"
        }).catch(err => console.warn("ThermoMind loop closure warning:", err.message));
      }

      return response;
    };

    return openaiClient;
  }
}

module.exports = { ThermoMind };
