// thermomind-continuity/src/index.js

class ThermoMindError extends Error {
  constructor(message, { status, body } = {}) {
    super(message);
    this.name = "ThermoMindError";
    this.status = status;
    this.body = body;
  }
}

class ThermoMind {
  constructor({ apiKey, baseUrl } = {}) {
    if (!apiKey) {
      throw new Error("ThermoMind: Missing API key");
    }
    this.apiKey = apiKey;

    // Default to your live Railway deployment, removing any trailing slash if provided
    const rawBase = baseUrl || process.env.THERMO_URL || "https://thermomind-production.up.railway.app";
    this.base = rawBase.endsWith("/") ? rawBase.slice(0, -1) : rawBase;
  }

  async _request(method, path, body = null) {
    const config = {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
      },
    };
    if (body) config.body = JSON.stringify(body);

    let res;
    try {
      res = await fetch(this.base + path, config);
    } catch (err) {
      throw new ThermoMindError(`ThermoMind ${method} ${path} — network error: ${err.message}`);
    }

    if (!res.ok) {
      let parsed;
      const text = await res.text();
      try {
        parsed = JSON.parse(text);
      } catch {
        parsed = { detail: text };
      }

      if (res.status === 401) {
        throw new ThermoMindError("Invalid or inactive API key.", { status: 401, body: parsed });
      }
      if (res.status === 402) {
        throw new ThermoMindError(
          parsed.detail || "Out of cycles — purchase a pack or upgrade your plan.",
          { status: 402, body: parsed }
        );
      }
      if (res.status === 404) {
        throw new ThermoMindError(`Resource not found: ${path}`, { status: 404, body: parsed });
      }
      throw new ThermoMindError(
        `ThermoMind ${method} ${path} failed: ${res.status} — ${parsed.detail || text}`,
        { status: res.status, body: parsed }
      );
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
      data: event.data || null,
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
      importance: memory.importance || 0.5,
    });
  }

  // NOTE: queryMemory was removed — it called GET /v1/sessions/{id}/memory,
  // which the server never implemented (only POST for writing memory exists).
  // Every call to the old queryMemory() would have failed with a 404/405.
  // Add it back once a matching GET route exists server-side in continuity.py.

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
   *
   * NOTE: this only works for clients that expose an OpenAI-shaped
   * `chat.completions.create` method — i.e. the real OpenAI SDK, or any
   * OpenAI-compatible endpoint (DeepSeek, Mistral via their OpenAI-compatible
   * mode, etc). It does NOT work with the Anthropic SDK, whose client shape
   * is different (`messages.create`, not `chat.completions.create`). There is
   * currently no wrapClaude() — Claude integration requires manually calling
   * getGuidance() and injecting it into your system prompt, as shown in the
   * Python proof script, not this wrapper.
   */
  wrapOpenAI(openaiClient) {
    const tmInstance = this;
    const originalCreate = openaiClient.chat.completions.create.bind(openaiClient.chat.completions);

    openaiClient.chat.completions.create = async function (params, options = {}) {
      const sessionId = options.thermoSessionId || params.thermoSessionId;

      if (!sessionId) {
        const { thermoSessionId, ...cleanParams } = params;
        return originalCreate(cleanParams, options);
      }

      const messages = params.messages || [];
      const lastUserMsg = [...messages].reverse().find((m) => m.role === "user");
      const userContent = lastUserMsg ? lastUserMsg.content : "";

      if (userContent) {
        tmInstance
          .appendEvent(sessionId, {
            type: "cycle_input",
            content: userContent,
            role: "user",
          })
          .catch((err) => console.warn("ThermoMind non-blocking telemetry log warning:", err.message));
      }

      let systemGuidance = "";
      try {
        const guidance = await tmInstance.getGuidance(sessionId, { context: userContent });
        if (guidance && guidance.hints && guidance.hints.length > 0) {
          systemGuidance = `\n[ThermoMind Stateful Identity & Continuity Context]:\n${guidance.hints.join("\n")}`;
        }
      } catch (err) {
        console.warn("ThermoMind continuity fallback: Operating raw.", err.message);
      }

      const modifiedMessages = messages.map((msg) => ({ ...msg }));
      if (systemGuidance) {
        const sysIndex = modifiedMessages.findIndex((m) => m.role === "system");
        if (sysIndex !== -1) {
          modifiedMessages[sysIndex].content += systemGuidance;
        } else {
          modifiedMessages.unshift({ role: "system", content: systemGuidance });
        }
      }

      const { thermoSessionId: p_id, ...cleanParams } = params;
      const { thermoSessionId: o_id, ...cleanOptions } = options;
      cleanParams.messages = modifiedMessages;

      const response = await originalCreate(cleanParams, cleanOptions);

      const assistantReply = response.choices?.[0]?.message?.content;
      if (assistantReply) {
        tmInstance
          .appendEvent(sessionId, {
            type: "cycle_output",
            content: assistantReply,
            role: "assistant",
          })
          .catch((err) => console.warn("ThermoMind loop closure warning:", err.message));
      }

      return response;
    };

    return openaiClient;
  }
}

module.exports = { ThermoMind, ThermoMindError };
