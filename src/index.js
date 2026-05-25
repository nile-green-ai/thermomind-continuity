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
}

module.exports = { ThermoMind };
