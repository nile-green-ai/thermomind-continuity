class ThermoMind {
  constructor({ apiKey }) {
    if (!apiKey) {
      throw new Error("ThermoMind: Missing API key");
    }

    this.apiKey = apiKey;
    this.base = "https://api.thermomind.ai/v1";
  }

  // -------------------------
  // Internal helpers
  // -------------------------
  async _get(path) {
    const res = await fetch(this.base + path, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${this.apiKey}`
      }
    });

    if (!res.ok) {
      throw new Error(`ThermoMind GET ${path} failed: ${res.status}`);
    }

    return res.json();
  }

  async _post(path, body) {
    const res = await fetch(this.base + path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.apiKey}`
      },
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      throw new Error(`ThermoMind POST ${path} failed: ${res.status}`);
    }

    return res.json();
  }

  // -------------------------
  // Public API
  // -------------------------

  // Create a persistent session
  async createSession({ externalId, metadata = {} }) {
    return this._post("/sessions", {
      external_id: externalId,
      metadata
    });
  }

  // Append an event (message, action, observation)
  async appendEvent(sessionId, event) {
    return this._post(`/sessions/${sessionId}/events`, event);
  }

  // Get continuity metrics (surplus, drift, stability, identity)
  async getState(sessionId) {
    return this._get(`/sessions/${sessionId}/state`);
  }

  // Store long-term memory
  async writeMemory(sessionId, memory) {
    return this._post(`/sessions/${sessionId}/memory`, memory);
  }

  // Query memory
  async queryMemory(sessionId, query, limit = 10) {
    return this._get(
      `/sessions/${sessionId}/memory?query=${encodeURIComponent(query)}&limit=${limit}`
    );
  }

  // Get continuity-aware guidance for LLM prompting
  async getGuidance(sessionId, { context, max_hints = 3 }) {
    return this._post(`/sessions/${sessionId}/guidance`, {
      context,
      max_hints
    });
  }

  // Get timeline of continuity metrics
  async getTimeline(sessionId, limit = 100) {
    return this._get(`/sessions/${sessionId}/timeline?limit=${limit}`);
  }
}

module.exports = { ThermoMind };
