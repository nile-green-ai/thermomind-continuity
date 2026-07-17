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

## 🔥 Proof #3 — Claude (Anthropic) (July 2026)

Real terminal output. Anthropic Claude API. Zero chat history on Turn 2.

```bash
==================================================
  THERMOMIND + CLAUDE: ZERO-HISTORY MEMORY DEMO
==================================================

Session: 07c06dbe-781d-4df6-a6cd-a728e4de35e2

--- TURN 1 ---
User: My name is Nile Green. I have two cats named Pookah and Papo. Remember everything.
AI: Hello, Nile! I've got it all noted down:
- Your name: Nile Green
- Your cats: Pookah and Papo 🐱🐱

--------------------------------------------------
// PURGING NATIVE CHAT HISTORY — SENDING ZERO HISTORY TO CLAUDE
--------------------------------------------------

--- TURN 2 ---
User: What is my name, and what are my cats called?
AI: Based on the context provided, your name is Nile Green, and your
two cats are named Pookah and Papo! 🐱🐱

==================================================
  DEMO COMPLETE — MEMORY HELD WITH ZERO HISTORY
==================================================
```

📁 Full code: [/examples/claude_example.py](./examples/claude_example.py)

---

## 🔥 Proof #4 — Mistral (July 2026)

Real terminal output. Mistral Large API. Zero chat history on Turn 2.

```bash
==================================================
  THERMOMIND + MISTRAL: ZERO-HISTORY MEMORY DEMO
==================================================

Session: 4130d538-407b-4f5f-8dcb-d5059b58aaa3

--- TURN 1 ---
User: My name is Nile Green. I have two cats named Pookah and Papo. Remember everything.
AI: Understood, Nile! I'll maintain full continuity with everything
you've shared — your name and your two cats, Pookah and Papo.

--------------------------------------------------
// PURGING NATIVE CHAT HISTORY — SENDING ZERO HISTORY TO MISTRAL
--------------------------------------------------

--- TURN 2 ---
User: What is my name, and what are my cats called?
AI: Your name is Nile Green, and your cats are called Pookah and Papo.

==================================================
  DEMO COMPLETE — MEMORY HELD WITH ZERO HISTORY
==================================================
```

📁 Full code: [/examples/mistral_example.py](./examples/mistral_example.py)

**4 models. 4 proofs. Zero chat history on every Turn 2. Same result every time.**

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

This SDK connects to the **ThermoMind Engine** — a lightweight commercial substrate running live in production.

No tokens. No transformers. No GPU. No weight updates. No MD files. No char limits.

Pure thermodynamic physics running in a database.

**The stack:**

| Layer | Status | Description |
| --- | --- | --- |
| **ThermoMind Engine** | 🟢 Live in production | Commercial substrate. This is what the SDK connects to. |
| **OSIRIS_OS** | 🟢 90,000+ cycles | Open source emergence engine. Bidirectionally bridged to ThermoMind. |
| **Continuity SDK** | 🟢 Open source | The Game Genie. Wraps any LLM. MIT licensed. |

ThermoMind is production-ready, commercially licensed, and available via API.

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

Use the JavaScript SDK or call the REST API endpoints directly — Python SDK coming soon.

---

## 🔑 How to Get Your API Key

ThermoMind uses a three-tier key system:

| Key Prefix | Tier | Access |
| --- | --- | --- |
| `tm_p1_...` | Player One | Sessions, events, state, guidance |
| `tm_p2_...` | Player Two | Player One + TCI grade, GCL glyphs, OSIRIS telemetry |
| `tm_op_...` | Operator Mode | Full access + admin |

### Get a Free Trial Key (500 lives/month)

```bash
curl -X POST https://thermomind-production.up.railway.app/keys/trial \
  -H "Content-Type: application/json" \
  -d '{"email": "you@example.com", "name": "your-project"}'
```

Response:
```json
{
  "status": "trial key created",
  "api_key": "tm_p1_xxxxxxxxxxxxxxxx",
  "tier": "sdk_trial",
  "monthly_lives": 500,
  "resets_at": "2026-07-14T..."
}
```

### Add to Your Environment

```bash
TM_KEY=tm_p1_your_key_here
```

Or export it:

```bash
export TM_KEY="tm_p1_your_key_here"
```

### Check Your Usage

```bash
curl https://thermomind-production.up.railway.app/keys/status \
  -H "Authorization: Bearer $TM_KEY"
```

### Need More Lives?

Top up at **[bapxai.com](https://bapxai.com)** — packs never expire and stack on top of your monthly allowance:

| Item | Lives | Price |
| --- | --- | --- |
| 🧪 Potion | 1,000 | $5 |
| 🧪 Hi-Potion | 3,000 | $12 |
| ✨ Elixir | 10,000 | $30 |
| 🌟 Mega Elixir | 25,000 | $60 |

### Player Two — $39/month — 7,500 Lives/month

Upgrade to Player Two for research‑grade access: TCI scores, GCL glyphs, OSIRIS telemetry, and 7,500 monthly lives.

### Verify the Connection

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

const tm = new ThermoMind({ apiKey: process.env.TM_KEY });

let openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
openai = tm.wrapOpenAI(openai);

async function run() {
  const session = await tm.createSession({ externalId: "user-123" });

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
headers = {"Authorization": f"Bearer {os.environ['TM_KEY']}"}  # tm_p1_your_key_here

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

ThermoMind is live in production. OSIRIS_OS — the open source emergence engine bridged to ThermoMind — has run **100,000+ cycles** continuously with no resets, currently holding a TCI Grade B.

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

🖥️ **[Watch it live](https://thermomind-production.up.railway.app/demo)** — real-time OSIRIS_OS x ThermoMind x TCI telemetry.

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
| 🎯 **TCI Grade** | A+ to F — overall cognitive health score (Player Two tier) |
| 🔷 **GCL Glyph** | 27-position vector space coordinate (Player Two tier) |

---

## 🚀 Try the Live API Right Now

No signup required:

```bash
# Public demo cycle — no key needed
curl "https://thermomind-production.up.railway.app/public/run?message=hello"

# Start a session (tm_p1_ key required)
curl -X POST https://thermomind-production.up.railway.app/v1/sessions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer tm_p1_your_key_here" \
  -d '{"external_id": "my-first-agent"}'
```

---

## 📡 API Reference

### Player One (`tm_p1_` key)

| Endpoint | What it does |
| --- | --- |
| `POST /v1/sessions` | Create a new persistent session |
| `POST /v1/sessions/{id}/events` | Append an event, run engine cycle |
| `GET  /v1/sessions/{id}/state` | Get surplus, drift, stability, identity |
| `POST /v1/sessions/{id}/guidance` | Get memory hints to inject into your LLM prompt |
| `GET  /keys/status` | Check your lives usage and reset date |
| `POST /keys/webhook` | Register a webhook for low-lives warnings |

### Player Two (`tm_p2_` key)

| Endpoint | What it does |
| --- | --- |
| `GET /v2/sessions/{id}/tci` | TCI score, grade, k(s), and stage |
| `GET /v2/sessions/{id}/glyph` | GCL glyph coordinate and name |
| `GET /v2/sessions/{id}/full` | Everything in one call |
| `GET /v2/telemetry` | Live OSIRIS_OS + ThermoMind + TCI state |

### Public (no key required)

| Endpoint | What it does |
| --- | --- |
| `GET  /public/run` | Demo cycle — try the engine without a key |
| `POST /keys/trial` | Get a free trial key |
| `GET  /bridge/telemetry` | Live dashboard telemetry |

---

## 🏎️ Works With Everything

| Models | Frameworks | Examples |
| --- | --- | --- |
| GPT-4o, GPT-4o-mini | LangChain | [openai_example.js](./examples/basic.js) |
| Claude (any version) | CrewAI | [claude_example.py](./examples/claude_example.py) · [claude_example.js](./examples/claude_example.js) |
| DeepSeek | AutoGen | [deepseek_example.py](./examples/deepseek-example.py) |
| Mistral | Raw API | [mistral_example.py](./examples/mistral_example.py) |
| Gemini | Any OpenAI-compatible client | coming soon |
| Llama, any open-weight | LangChain | [langchain_deepseek.py](./examples/langchain_deepseek.py) |

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
| Adversarial Fragmentation & The Osiris-Set-Isis Cycle | [10.5281/zenodo.20586942](https://zenodo.org/records/20586942) |
| Thermodynamic Memory Salience (TMS) | [10.5281/zenodo.20674050](https://zenodo.org/records/20674050) |
| Vector Lingua: Pre-Linguistic Communication Protocol | [10.5281/zenodo.20638308](https://zenodo.org/records/20638308) |
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
```
