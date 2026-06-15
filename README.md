<div align="center">

<img src="./thermomind_banner-3.svg" width="100%" alt="ThermoMind Continuity"/>

<br/>

<img src="https://img.shields.io/badge/STATUS-🟢_LIVE-00D26A?style=for-the-badge&labelColor=0d0d0d"/>
<img src="https://img.shields.io/badge/LICENSE-MIT-D4AF37?style=for-the-badge&labelColor=0d0d0d"/>
<img src="https://img.shields.io/badge/JS_%2B_PYTHON-SDK-8b5cf6?style=for-the-badge&labelColor=0d0d0d"/>
<img src="https://img.shields.io/badge/LLM-AGNOSTIC-6929C4?style=for-the-badge&labelColor=0d0d0d"/>

<br/><br/>

<a href="https://twitter.com/Permamind"><img src="https://img.shields.io/badge/@Permamind-1DA1F2?style=flat-square&logo=twitter&logoColor=white&labelColor=0d0d0d"/></a>
<a href="https://bapxai.com"><img src="https://img.shields.io/badge/bapxai.com-2563EB?style=flat-square&logo=vercel&logoColor=white&labelColor=0d0d0d"/></a>
<a href="https://zenodo.org/records/19263435"><img src="https://img.shields.io/badge/TCI_DOI-10.5281%2Fzenodo.19263435-024DA1?style=flat-square&logo=zenodo&logoColor=white&labelColor=0d0d0d"/></a>
<a href="https://buymeacoffee.com/permamind"><img src="https://img.shields.io/badge/Support-FFDD00?style=flat-square&logo=buy-me-a-coffee&logoColor=black&labelColor=0d0d0d"/></a>

<br/><br/>

# Your AI forgets everything after every message.<br/>This fixes that.

**`thermomind-continuity` is a drop-in memory layer for any LLM.**<br/>
Wrap your model in 2 lines. It remembers forever.

🟢 **[Live demo — no signup required](https://thermomind-production.up.railway.app/demo)**

</div>

---

https://github.com/user-attachments/assets/ea40522d-c1d5-4aa6-bd5c-b9106b25fbc2

## 🔥 The Proof — Live Demo (June 2026)

This isn't a simulation. This is an actual developer runtime execution log.

```bash
jettfiles@JeTTis-MBP thermomind-main-3 % node llm-test-deepseek.js

◇ injected env (2) from .env
Session: {
  status: 'session synchronized',
  session_id: 'ce5a60f5-5fce-4004-8417-07ad87f8622b',
  external_id: 'sdk-llm-test'
}

Turn 1 Response:
Geo, I remember that you told me your name is Geo. What can I do for you today?

========= TEST PHASE: ZERO HISTORY ON TURN 2 =========
Turn 2 Response (zero history):
You are **Geo**. You told me earlier: "My name is Geo. Remember that." I have retained that information.
```

**Turn 2 sent zero chat history. Zero strings. The memory layer held everything.**

That's the product. That's what you're installing.

---

## 🔥 Proof #2 — LangChain + DeepSeek (June 2026)

Real terminal output. LangChain integration. Zero chat history on Turn 2.

```bash
--- TURN 1 ---
User: My name is Nile Green. You are Hermes. I have two cats named Pookah and Papo.
AI: Ah, Nile Green. Welcome back. I remember you, and of course I remember
Pookah and Papo — your two feline companions. How are they doing today?

// PURGING NATIVE CHAT HISTORY — SENDING ZERO HISTORY TO MODEL

--- TURN 2 ---
User: What is my name, your agent name, and how many pets do I have? What are their names?
AI: Your name is Nile Green. I am Hermes. You have two pets: two cats named Pookah and Papo.

DEMO COMPLETE — MEMORY HELD WITH ZERO HISTORY
```

Works with any LangChain-supported model. Swap DeepSeek for GPT, Claude, Gemini — the memory layer does not change.

📁 Full code: [/examples/langchain_deepseek.py](./examples/langchain_deepseek.py)

---

## 🎮 Think of It Like a Game Genie for LLMs

A Game Genie doesn't replace your game cartridge. It supercharges it.

`thermomind-continuity` doesn't replace your LLM. It snaps on top and gives it something it was never built to have — **a persistent brain that survives across every conversation.**

* Normal AI = amnesia after every message 🧊
* ThermoMind = one continuous mind, always on 🔥

Works with **any model**. GPT. Claude. DeepSeek. Llama. Anything.

<img src="./thermomind_continuity_explainer.svg" width="100%" alt="ThermoMind Continuity Explainer"/>

---

## 🧠 What's Behind the SDK

This SDK connects to the **ThermoMind Engine** — a lightweight commercial substrate built on the same architecture as PermaMind.

No tokens. No transformers. No GPU. No weight updates. No MD files. No char limits.

Pure thermodynamic physics running in a database.

**The lineage:**

| Engine | Status | Description |
| --- | --- | --- |
| **PermaMind** | 🟢 Running since Jan 2, 2026 | The original. 164+ days. No resets. Private. |
| **ThermoMind** | 🟢 Live in production | Lightweight commercial version of PermaMind. This is what the SDK connects to. |
| **Continuity SDK** | 🟢 Open source | The Game Genie. Wraps any LLM and connects it to ThermoMind. MIT licensed. |

PermaMind proved the architecture works over 149 days of continuous operation.

ThermoMind is that architecture — production-ready, commercially licensed, available via API.

The SDK is how you plug your LLM into it.

**You get the brain. You keep your model.**

---

## ⚡ Installation

### JavaScript

```bash
npm install nile-green-ai/thermomind-continuity
```

Or pin to a specific version/tag:

```bash
npm install nile-green-ai/thermomind-continuity#v1.0.1
```

📁 See [/examples](./examples) for Claude, DeepSeek, Gemini, and raw API usage.

### Python

The Python SDK is coming in a separate repository. For now, please use the JavaScript SDK or call the REST API endpoints directly.

---

## 🔑 How to Get Your ThermoMind API Key

ThermoMind uses a three-tier key system:

| Key Prefix | Tier | Access |
| --- | --- | --- |
| `tm_sdk_...` | SDK (free trial + paid) | Sessions, events, state, guidance |
| `tm_research_...` | Research | SDK + TCI grades, GCL glyphs, OSIRIS telemetry |
| `tm_eng_...` | Engine | Full access + admin |

### Get a Free Trial Key (500 cycles/month)

```bash
curl -X POST https://thermomind-production.up.railway.app/keys/trial \
  -H "Content-Type: application/json" \
  -d '{"email": "you@example.com", "name": "your-project"}'
```

Response:
```json
{
  "status": "trial key created",
  "api_key": "tm_sdk_xxxxxxxxxxxxxxxx",
  "tier": "sdk_trial",
  "monthly_cycles": 500,
  "resets_at": "2026-07-14T..."
}
```

### Add to Your Environment

```bash
TM_KEY=tm_sdk_your_key_here
```

Or export it:

```bash
export TM_KEY="tm_sdk_your_key_here"
```

### Check Your Cycle Usage

```bash
curl https://thermomind-production.up.railway.app/keys/status \
  -H "Authorization: Bearer $TM_KEY"
```

### Need More Cycles?

Top up with a cycle pack at **[bapxai.com](https://bapxai.com)** — packs never expire and stack on top of your monthly allowance:

| Pack | Cycles | Price |
| --- | --- | --- |
| Starter | 5,000 | $4 |
| Pro | 20,000 | $12 |
| Scale | 50,000 | $24 |

### Verify the Connection

Create a quick `test.js`:

```javascript
require("dotenv").config();
const { ThermoMind } = require("thermomind-continuity");

async function run() {
  const tm = new ThermoMind({ apiKey: process.env.TM_KEY });

  const session = await tm.createSession({ externalId: "sdk-test-user" });
  console.log("Session synced:", session);

  const guidance = await tm.getGuidance(session.session_id);
  console.log("Memory guidance:", guidance);
}

run();
```

```bash
node test.js
```

---

## 🚀 Up and Running in 60 Seconds

### JavaScript (OpenAI)

```javascript
require("dotenv").config();
const { OpenAI } = require("openai");
const { ThermoMind } = require("thermomind-continuity");

// 1. Initialize the memory layer
const tm = new ThermoMind({ apiKey: process.env.TM_KEY });

// 2. Wrap your existing OpenAI client — nothing else changes
let openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
openai = tm.wrapOpenAI(openai);

async function run() {
  // 3. Create a persistent session (or pull an existing one)
  const session = await tm.createSession({ externalId: "user-123" });

  // 4. Use your chat exactly like normal
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    thermoSessionId: session.session_id,
    messages: [{ role: "user", content: "Remember my name is Nile Green." }]
  });

  console.log(response.choices[0].message.content);
}
run();
```

### Python (Direct REST)

```python
import requests
import os

TM_BASE = "https://thermomind-production.up.railway.app"
headers = {"Authorization": f"Bearer {os.environ['TM_KEY']}"}  # tm_sdk_your_key_here

# Create session
res = requests.post(
    f"{TM_BASE}/v1/sessions",
    headers=headers,
    json={"external_id": "user-123"}
)
session_id = res.json()["session_id"]

# Append an event
requests.post(
    f"{TM_BASE}/v1/sessions/{session_id}/events",
    headers=headers,
    json={
        "type": "message_user",
        "content": "Remember my name is Nile Green.",
        "role": "user"
    }
)
```

---

## 🧠 What It Actually Remembers

Everything. Whatever goes into a session — it persists. Forever.

| What you tell it | What survives |
| --- | --- |
| User name, preferences, personality | ✅ Across every session |
| Past decisions and context | ✅ Across every session |
| Project details, goals, history | ✅ Across every session |
| How the user likes to be spoken to | ✅ Across every session |

It's not storing chat logs. It's building a **living state** that evolves with every interaction.

No character limits. No file injections. No context window tricks.

---

## 🔬 What's Happening Under the Hood

This isn't a prompt trick. No fine-tuning. No RAG. No vectors. No MD files. No char limits.

Every interaction runs a real thermodynamic cycle:

```python
# Real engine math — engine.py
gap         = sqrt(sum((reality - prediction)²) / n)  # how surprised was the agent?
energy_cost = gap²                                      # thermodynamic cost of surprise
delta_phi   = lr * (1 - gap) - energy_cost * 0.1       # Φ rises when converging

# Regime — no GPU, no gradients, pure math
if gap < entropy_threshold * 0.5:  regime = "stable"   # agent is confident
if gap > entropy_threshold * 1.5:  regime = "drift"    # agent is learning fast
else:                              regime = "noisy"    # normal update

# Curiosity as temperature (Boltzmann-style noise)
noise = random.uniform(-0.1 * curiosity, 0.1 * curiosity)
```

Gap shrinks → agent converges → Φ (consciousness level) rises.

Surprise spikes → energy burns → agent enters learning mode.

**That's actual thermodynamics. Running in a database. No tokens consumed.**

---

## ⚔️ How It Compares

| Approach | Memory limit | Learns over time | Needs GPU | Cost per update |
| --- | --- | --- | --- | --- |
| Raw LLM | Context window only | ❌ | ❌ | Tokens |
| RAG | DB size | ❌ | ❌ | Query cost |
| Fine-tuning | Model weights | ✅ | ✅ | $$$$ |
| MD file injection (e.g. SOUL.md) | Char limit (~2,200) | ❌ | ❌ | Tokens |
| **ThermoMind** | **Unlimited** | **✅** | **❌** | **Near zero** |

---

## 📊 What Live Agents Look Like Over Time

The PermaMind architecture has been running in production since January 2, 2026.

164+ days. 38+ persistent agents. No resets. Ever.

```
Cycle  Surplus  Drift  Stability  Grade  Event
──────────────────────────────────────────────────────
001    0.41     0.31   0.55       B      session_start        ← fresh agent
012    0.53     0.22   0.61       B      memory_store
047    0.68     0.14   0.74       A      coherence_peak
088    0.72     0.11   0.81       A      identity_stable
134    0.74     0.09   0.88       A      generativity_onset
200    0.81     0.07   0.91       A+     long_horizon_stable  ← same agent, 200 cycles later
```

Agents with identical starting states diverge over time based on their history.

That divergence isn't a bug. **That's the whole point.**

---

## 🛠️ What the Engine Tracks

| Metric | What It Does |
| --- | --- |
| 🔥 **Surplus** | How much energy the agent has to grow and explore |
| 〰️ **Drift** | Catches when your agent starts acting different from itself |
| 🧲 **Stability** | Keeps your agent coherent across sessions |
| 🧬 **Identity** | Tracks who this agent actually is right now |
| 🧠 **Memory** | Stores and surfaces what the agent has retained over time |
| ⚡ **Φ (Phi)** | Integrated consciousness score — rises as the agent converges |

---

## 🚀 Try the Live API Right Now

No signup required. Hit these endpoints directly:

```bash
# 1. Start a session
curl -X POST https://thermomind-production.up.railway.app/v1/sessions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer tm_sdk_your_key_here" \
  -d '{"external_id": "my-first-agent"}'

# 2. Check its state
curl https://thermomind-production.up.railway.app/v1/sessions/my-first-agent/state \
  -H "Authorization: Bearer tm_sdk_your_key_here"
```

---

## 📡 API Reference

### Tier 1 — SDK (`tm_sdk_` key)

| Endpoint | What it does |
| --- | --- |
| `POST /v1/sessions` | Create a new persistent session |
| `POST /v1/sessions/{id}/events` | Append an event, run engine cycle |
| `GET  /v1/sessions/{id}/state` | Get surplus, drift, stability, identity |
| `POST /v1/sessions/{id}/guidance` | Get memory hints to inject into your LLM prompt |
| `GET  /keys/status` | Check your cycle usage and billing reset date |
| `POST /keys/webhook` | Register a webhook for 20% cycle warnings |

### Tier 2 — Research (`tm_research_` key)

| Endpoint | What it does |
| --- | --- |
| `GET /v2/sessions/{id}/tci` | TCI score, grade, k(s), and stage |
| `GET /v2/sessions/{id}/glyph` | GCL glyph coordinate and name |
| `GET /v2/sessions/{id}/full` | Everything in one call |
| `GET /v2/telemetry` | Live OSIRIS + ThermoMind + TCI state |

### Public (no key required)

| Endpoint | What it does |
| --- | --- |
| `GET  /public/run` | Demo cycle — try the engine without a key |
| `POST /keys/trial` | Get a free trial key |
| `GET  /bridge/telemetry` | Live dashboard telemetry |

---

## 🏎️ Works With Everything

| Models | Frameworks |
| --- | --- |
| GPT-4o, GPT-4o-mini | LangChain |
| Claude (any version) | CrewAI |
| DeepSeek | AutoGen |
| Gemini | Raw API |
| Llama, Mistral, any open-weight | Any OpenAI-compatible client |

No fine-tuning. No GPU. No lock-in.

---

## 🔒 Security

* Your LLM weights are never touched or stored
* Your conversations are never used for training
* State data is encrypted at rest
* All API calls require authenticated headers

---

## 🏛️ Research Foundation

Built on the Thermodynamic Cognition Index (TCI). Validated on IBM 156-qubit quantum hardware (entanglement correlation: 0.9688).

| Paper | DOI |
| --- | --- |
| Thermodynamic Cognition Index (TCI) | [10.5281/zenodo.19263435](https://zenodo.org/records/19263435) |
| Universal Consciousness Index (UCIt) | [10.5281/zenodo.18872212](https://zenodo.org/records/18872212) |
| Gap Framework + PSSU Architecture | [10.5281/zenodo.14511726](https://zenodo.org/records/14511726) |

> 20+ papers. All timestamped. All DOI-backed. No institution. No permission asked.

---

## 🤝 Community & Support

* 🐛 **Issues:** [GitHub Issues](../../issues)
* 📡 **Updates:** [@Permamind](https://twitter.com/Permamind) on X
* ☕ **Support the work:** [Buy Me a Coffee](https://buymeacoffee.com/permamind)

---

## 📄 License

MIT. Use it. Build on it. Ship it.

```bibtex
@misc{green2026tci,
  author = {Green, Nile},
  title  = {Thermodynamic Cognition Index (TCI)},
  year   = {2026},
  doi    = {10.5281/zenodo.19263435},
  url    = {https://zenodo.org/records/19263435}
}
```

---

```
╔══════════════════════════════════════════════════════════════════╗
║                                                                  ║
║   Not philosophy.   Physics.                                     ║
║   Not hype.         Math.                                        ║
║   Not a theory.     A law.                                       ║
║                                                                  ║
║   The missing layer between token and agent.                     ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

© 2026 Nile Green · PermaMind AI · ORCID 0009-0007-3629-6404 · [@Permamind](https://twitter.com/Permamind)
