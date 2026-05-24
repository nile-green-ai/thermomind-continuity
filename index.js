class ThermoMind {
  constructor({ apiKey }) {
    this.apiKey = apiKey;
    this.base = "https://api.thermomind.ai/v1";
  }

  async createSession(body) {
    return this._post("/sessions", body);
  }

  async appendEvent(id, body) {
    return this._post(`/sessions/${id}/events`, body);
  }

  async getState(id) {
    return this._get(`/sessions/${id}/state`);
  }

  async getGuidance(id, body) {
    return this._post(`/sessions/${id}/guidance`, body);
  }

  async _post(path, body) {
    const res = await fetch(this.base + path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`
      },
      body: JSON.stringify(body)
    });
    return res.json();
  }

  async _get(path) {
    const res = await fetch(this.base + path, {
      headers: {
        Authorization: `Bearer ${this.apiKey}`
      }
    });
    return res.json();
  }
}

module.exports = { ThermoMind };
