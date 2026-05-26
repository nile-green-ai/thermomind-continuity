<div align="center">

![thermomind-continuity](./thermomind_banner_v2.svg)

### A Game Genie for your AI.

Attach it to any LLM. Your agent stops resetting. It starts remembering.

<img src="https://img.shields.io/badge/STATUS-🟢_PRODUCTION-00D26A?style=for-the-badge&labelColor=0d0d0d"/>
<img src="https://img.shields.io/badge/LICENSE-MIT-D4AF37?style=for-the-badge&labelColor=0d0d0d"/>
<img src="https://img.shields.io/badge/JS_%2B_PYTHON-SDK-8b5cf6?style=for-the-badge&labelColor=0d0d0d"/>
<img src="https://img.shields.io/badge/LLM-AGNOSTIC-6929C4?style=for-the-badge&labelColor=0d0d0d"/>

<br/>

<a href="https://twitter.com/BAPxAI"><img src="https://img.shields.io/badge/@BAPxAI-1DA1F2?style=flat-square&logo=twitter&logoColor=white&labelColor=0d0d0d"/></a>
<a href="https://bapxai.com"><img src="https://img.shields.io/badge/bapxai.com-2563EB?style=flat-square&logo=vercel&logoColor=white&labelColor=0d0d0d"/></a>
<a href="https://zenodo.org/records/19263435"><img src="https://img.shields.io/badge/TCI_DOI-10.5281%2Fzenodo.19263435-024DA1?style=flat-square&logo=zenodo&logoColor=white&labelColor=0d0d0d"/></a>
<a href="https://buymeacoffee.com/permamind"><img src="https://img.shields.io/badge/Support-FFDD00?style=flat-square&logo=buy-me-a-coffee&logoColor=black&labelColor=0d0d0d"/></a>

</div>

---


```

Your AI forgets everything after every message.
thermomind-continuity fixes that.

```

---

## ⚡ What It Does

Your LLM resets after every call. No memory. No identity. No sense of who it is or what it's been doing.

`thermomind-continuity` is a **drop-in SDK** that gives any LLM agent a persistent internal state — so it builds on experience over time instead of starting from scratch every turn.

You keep your model. You keep your framework. You just plug this in.

**Your agent starts becoming something.**

```bash
npm install thermomind-continuity

```

```bash
pip install thermomind-continuity

```

---

## 🎮 Think of It Like This

> A Game Genie doesn't replace your game. It supercharges it.

`thermomind-continuity` doesn't replace your LLM. It attaches to it and enhances it with a layer of persistent cognitive state that your model was never built to have on its own.

One SDK. Any model. Any framework.

---

## ⏱️ Up and Running in 5 Minutes

```ts
import { ThermoMind } from "thermomind-continuity";

const tm = new ThermoMind({ apiKey: process.env.TM_KEY });

// Create a persistent session
const session = await tm.createSession();

// Log what your agent is doing
await tm.appendEvent(session.id, { type: "msg", content: "hello", role: "user" });

// Get live state hints — inject these into your system prompt
const guidance = await tm.getGuidance(session.id);
console.log(guidance.hints);
// → { surplus: 0.71, drift: 0.08, stability: 0.84, tone: "stable" }

```

That's it. Your agent now has a state that persists across every session.

---

## 🛠️ System Architecture

---

## What It Tracks

| Metric | What It Does |
| --- | --- |
| 🔥 **Surplus** | How much energy the agent has to grow and learn |
| 〰️ **Drift** | Catches when your agent starts acting different from itself |
| 🧲 **Stability** | Keeps your agent coherent across sessions |
| 🧬 **Identity** | Tracks who this agent actually is right now |
| 🧠 **Memory** | Stores and surfaces what the agent has retained over time |

These update automatically on every interaction and come back as real-time hints you inject into your system prompt.

---

## 🏎️ Works With Everything

No fine-tuning required. No GPU overhead. No lock-in.

**Models:** GPT · Claude · DeepSeek · Any open-weight model

**Frameworks:** LangChain · CrewAI · AutoGen · Raw API

---

## 📊 What Growth Actually Looks Like

Running live in production since January 2026. 38+ persistent agents. 141+ days continuous. No resets.

```
Cycle  Surplus  Drift  Stability  Grade  Event
──────────────────────────────────────────────────────
001    0.41     0.31   0.55       B      session_start      ← fresh agent
012    0.53     0.22   0.61       B      memory_store
047    0.68     0.14   0.74       A      coherence_peak
088    0.72     0.11   0.81       A      identity_stable
134    0.74     0.09   0.88       A      generativity_onset
200    0.81     0.07   0.91       A+     long_horizon_stable ← same agent, 200 turns later

```

Agents that start with identical settings **diverge over time** based on their interaction history.

That divergence isn't a bug. That's the whole point.

---

## 🚀 Full Quickstart

**JavaScript / TypeScript**

```ts
import { ThermoMind } from "thermomind-continuity";

const tm = new ThermoMind({ apiKey: process.env.TM_KEY });

const session = await tm.createSession({ externalId: "agent-123" });

await tm.appendEvent(session.id, {
  type: "message_user",
  content: "Hey, I need help with my billing.",
  role: "user"
});

const guidance = await tm.getGuidance(session.id, {
  context: "support: billing"
});

// Inject guidance.hints into your LLM system prompt
console.log(guidance.hints);
// → { surplus: 0.71, drift: 0.08, stability: 0.84, tone: "stable", memory_refs: [...] }

```

**Python**

```python
from thermomind import ThermoMind
import os

tm = ThermoMind(api_key=os.environ["TM_KEY"])

session = tm.create_session(external_id="agent-123")

tm.append_event(session.id, {
    "type": "message_user",
    "content": "Hey, I need help with my billing.",
    "role": "user"
})

guidance = tm.get_guidance(session.id, context="support: billing")
print(guidance.hints)

```

---

## 🧪 Try the API Right Now

**1. Start a session:**

```bash
curl -X POST [https://thermomind-production.up.railway.app/v1/sessions](https://thermomind-production.up.railway.app/v1/sessions) \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer test_public_key" \
  -d '{"externalId": "terminal-agent"}'

```

**2. Check its state:**

```bash
curl -X GET [https://thermomind-production.up.railway.app/v1/sessions/terminal-agent/state](https://thermomind-production.up.railway.app/v1/sessions/terminal-agent/state) \
  -H "Authorization: Bearer test_public_key"

```

---

## 📡 API Reference

```
POST   /sessions                  →  Create a new persistent session
POST   /sessions/{id}/events      →  Append an event, update state
GET    /sessions/{id}/state       →  Get surplus, drift, stability, identity
POST   /sessions/{id}/memory      →  Store long-term memory
GET    /sessions/{id}/memory      →  Query memory by relevance
POST   /sessions/{id}/guidance    →  Get continuity hints for your LLM prompt
GET    /sessions/{id}/timeline    →  Full state history

```

Full spec: [`openapi.yaml`](https://www.google.com/search?q=./openapi.yaml)

---

## 👥 Who This Is For

* **Agent builders** who need cross-session state without rolling their own
* **AI startups** shipping products that need consistent agent personalities
* **Support AI teams** who need tone and context to carry across conversations
* **Game / NPC developers** building characters that actually remember players
* **Researchers** studying how agents change over time

---

## 🔒 Security

* Your LLM weights are never touched or stored
* Your conversations are never used for training
* State data is encrypted at rest
* All API calls require authenticated headers

---

## 📦 Repo Structure

```
thermomind-continuity/
├── src/
│   ├── index.ts        # JS/TS entry point
│   ├── client.ts       # API client
│   ├── metrics.ts      # Surplus, drift, stability
│   ├── memory.ts       # Long-term memory
│   └── guidance.ts     # LLM hint generation
├── python/
│   └── thermomind/
├── openapi.yaml
├── docs/
└── examples/
    ├── basic_session.ts
    ├── support_agent.ts
    └── research_agent.py

```

---

## 🗺️ Roadmap 2026

* [x] Core SDK — JS + Python
* [x] Production launch
* [ ] Memory embeddings overhaul
* [ ] Native multi-agent continuity
* [ ] Surplus-driven planning hooks
* [ ] Drift-aware system prompting
* [ ] Identity state export / import

---

## 🏛️ Under the Hood

Built on the [Thermodynamic Cognition Index (TCI)](https://zenodo.org/records/19263435) — a framework for persistent, surplus-driven agent cognition. Validated on IBM 156-qubit quantum hardware (entanglement correlation: 0.969).

| Paper | DOI |
| --- | --- |
| Thermodynamic Cognition Index (TCI) | [10.5281/zenodo.19263435](https://zenodo.org/records/19263435) |
| Universal Consciousness Index (UCIt) | [10.5281/zenodo.18872212](https://zenodo.org/records/18872212) |
| Gap Framework + PSSU Architecture | [10.5281/zenodo.14511726](https://zenodo.org/records/14511726) |

---

## 🤝 Community

* 🐛 **Issues:** [GitHub Issues](https://github.com/nile-green-ai/thermomind-continuity/issues)
* 📡 **Updates:** [@BAPxAI](https://twitter.com/BAPxAI) on Twitter
* ☕ **Support the work:** [Buy Me a Coffee](https://buymeacoffee.com/permamind)

---

## 📄 License

MIT. Use it. Build on it. Ship it.

```bibtex
@misc{green2026tci,
  author    = {Green, Nile},
  title     = {Thermodynamic Cognition Index (TCI)},
  year      = {2026},
  doi       = {10.5281/zenodo.19263435},
  url       = {[https://zenodo.org/records/19263435](https://zenodo.org/records/19263435)}
}

```

---

```
╔══════════════════════════════════════════════════╗
║                                                  ║
║   Not philosophy.  Physics.                      ║
║   Not hype.        Math.                         ║
║   Not theory.      Production.                   ║
║                                                  ║
║   The missing layer between token and agent.     ║
║                                                  ║
╚══════════════════════════════════════════════════╝

```

**Nile Green** · [ORCID](https://orcid.org/0009-0007-3629-6404) · [@BAPxAI](https://twitter.com/BAPxAI) · [bapxai.com](https://bapxai.com)

⭐ Star the repo. Try the API. Build an agent that remembers.

```

```
