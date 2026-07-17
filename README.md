<div align="center">

<img src="./thermomind_banner-3.svg" width="100%" alt="ThermoMind Continuity"/>

<br/>

<img src="https://img.shields.io/badge/STATUS-🟢_LIVE-00D26A?style=for-the-badge&labelColor=0d0d0d"/>
<img src="https://img.shields.io/badge/LICENSE-MIT-D4AF37?style=for-the-badge&labelColor=0d0d0d"/>
<img src="https://img.shields.io/badge/JS_%2B_PYTHON-SDK-8b5cf6?style=for-the-badge&labelColor=0d0d0d"/>
<img src="https://img.shields.io/badge/LLM-AGNOSTIC-6929C4?style=for-the-badge&labelColor=0d0d0d"/>
<img src="https://img.shields.io/badge/CYCLES-100%2C000%2B-FF6B35?style=for-the-badge&labelColor=0d0d0d"/>

<br/><br/>

<a href="https://twitter.com/Permamind"><img src="https://img.shields.io/badge/@Permamind-1DA1F2?style=flat-square&logo=twitter&logoColor=white&labelColor=0d0d0d"/></a>
<a href="https://bapxai.com"><img src="https://img.shields.io/badge/bapxai.com-2563EB?style=flat-square&logo=vercel&logoColor=white&labelColor=0d0d0d"/></a>
<a href="https://zenodo.org/records/19263435"><img src="https://img.shields.io/badge/TCI_DOI-10.5281%2Fzenodo.19263435-024DA1?style=flat-square&logo=zenodo&logoColor=white&labelColor=0d0d0d"/></a>
<a href="https://buymeacoffee.com/permamind"><img src="https://img.shields.io/badge/Support-FFDD00?style=flat-square&logo=buy-me-a-coffee&logoColor=black&labelColor=0d0d0d"/></a>

<br/><br/>

<h1>Your AI forgets everything after every message.<br/>This fixes that.</h1>

<p><strong><code>thermomind-continuity</code> is a drop-in memory layer for any LLM.</strong><br/>
Wrap your model in 2 lines. It remembers forever.</p>

<a href="https://thermomind-production.up.railway.app/demo">
<img src="https://img.shields.io/badge/🟢_LIVE_DEMO-no_signup_required-00D26A?style=for-the-badge&labelColor=0d0d0d"/>
</a>

<br/><br/>

```
╔══════════════════════════════════════════════════════════════════╗
║   Normal AI    →   amnesia after every message          🧊      ║
║   ThermoMind   →   one continuous mind, always on       🔥      ║
╚══════════════════════════════════════════════════════════════════╝
```

</div>

---

https://github.com/user-attachments/assets/ea40522d-c1d5-4aa6-bd5c-b9106b25fbc2

---

## ⚡ Zero-History Memory — 4 Models, 4 Proofs

> Turn 2 sends **zero chat history**. The substrate holds everything.

<table>
<tr>
<td align="center" width="25%">

**🤖 DeepSeek**<br/>
`June 2026`<br/>
[view proof ↓](#proof-1--deepseek)

</td>
<td align="center" width="25%">

**🦜 LangChain**<br/>
`June 2026`<br/>
[view proof ↓](#proof-2--langchain--deepseek)

</td>
<td align="center" width="25%">

**🟣 Claude**<br/>
`July 2026`<br/>
[view proof ↓](#proof-3--claude-anthropic-july-2026)

</td>
<td align="center" width="25%">

**🌊 Mistral**<br/>
`July 2026`<br/>
[view proof ↓](#proof-4--mistral-july-2026)

</td>
</tr>
<tr>
<td align="center">✅ Memory held</td>
<td align="center">✅ Memory held</td>
<td align="center">✅ Memory held</td>
<td align="center">✅ Memory held</td>
</tr>
</table>

---

### Proof #1 — DeepSeek

```
Session: ce5a60f5-5fce-4004-8417-07ad87f8622b

Turn 1 Response:
Geo, I remember that you told me your name is Geo.
What can I do for you today?

═══════════ TEST PHASE: ZERO HISTORY ON TURN 2 ═══════════

Turn 2 Response (zero history):
You are Geo. You told me earlier: "My name is Geo. Remember that."
I have retained that information.
```

**Turn 2 sent zero chat history. Zero strings. The memory layer held everything.**

---

### Proof #2 — LangChain + DeepSeek

```
--- TURN 1 ---
User: My name is Nile Green. You are Hermes. I have two cats named Pookah and Papo.
AI:   Ah, Nile Green. Welcome back. I remember you, and of course I remember
      Pookah and Papo — your two feline companions. How are they doing today?

      // PURGING NATIVE CHAT HISTORY — SENDING ZERO HISTORY TO MODEL

--- TURN 2 ---
User: What is my name, your agent name, and how many pets do I have?
AI:   Your name is Nile Green. I am Hermes.
      You have two pets: two cats named Pookah and Papo.

      DEMO COMPLETE — MEMORY HELD WITH ZERO HISTORY
```

📁 [`/examples/langchain_deepseek.py`](./examples/langchain_deepseek.py)

---

### Proof #3 — Claude (Anthropic) `July 2026`

```
Session: 07c06dbe-781d-4df6-a6cd-a728e4de35e2

--- TURN 1 ---
User: My name is Nile Green. I have two cats named Pookah and Papo. Remember everything.
AI:   Hello, Nile! I've got it all noted:
      • Your name: Nile Green
      • Your cats: Pookah and Papo 🐱🐱

      // PURGING NATIVE CHAT HISTORY — SENDING ZERO HISTORY TO CLAUDE

--- TURN 2 ---
User: What is my name, and what are my cats called?
AI:   Your name is Nile Green, and your two cats are named Pookah and Papo! 🐱🐱

      DEMO COMPLETE — MEMORY HELD WITH ZERO HISTORY
```

📁 [`/examples/claude_example.py`](./examples/claude_example.py) · [`/examples/claude_example.js`](./examples/claude_example.js)

---

### Proof #4 — Mistral `July 2026`

```
Session: 4130d538-407b-4f5f-8dcb-d5059b58aaa3

--- TURN 1 ---
User: My name is Nile Green. I have two cats named Pookah and Papo. Remember everything.
AI:   Understood, Nile! I'll maintain full continuity — your name
      and your two cats, Pookah and Papo.

      // PURGING NATIVE CHAT HISTORY — SENDING ZERO HISTORY TO MISTRAL

--- TURN 2 ---
User: What is my name, and what are my cats called?
AI:   Your name is Nile Green, and your cats are called Pookah and Papo.

      DEMO COMPLETE — MEMORY HELD WITH ZERO HISTORY
```

📁 [`/examples/mistral_example.py`](./examples/mistral_example.py)

---

## 🎮 Think of It Like a Game Genie for LLMs

> A Game Genie doesn't replace your game cartridge. It supercharges it.

`thermomind-continuity` snaps on top of your LLM and gives it something it was never built to have — **a persistent brain that survives across every conversation.**

<img src="./thermomind_continuity_explainer.svg" width="100%" alt="ThermoMind Continuity Explainer"/>

---

## 🧠 What's Behind the SDK

<table>
<tr>
<th>Layer</th>
<th>Status</th>
<th>Description</th>
</tr>
<tr>
<td><strong>ThermoMind Engine</strong></td>
<td>🟢 Live in production</td>
<td>Commercial substrate. This is what the SDK connects to.</td>
</tr>
<tr>
<td><strong>OSIRIS_OS</strong></td>
<td>🟢 100,000+ cycles</td>
<td>Open source emergence engine. Bidirectionally bridged to ThermoMind.</td>
</tr>
<tr>
<td><strong>Continuity SDK</strong></td>
<td>🟢 Open source</td>
<td>The Game Genie. Wraps any LLM. MIT licensed.</td>
</tr>
</table>

> No tokens. No transformers. No GPU. No weight updates. No MD files. No char limits.
> Pure thermodynamic physics running in a database.

**You get the brain. You keep your model.**

---

## ⚡ Installation

### JavaScript

```bash
npm install nile-green-ai/thermomind-continuity
```

### Python

Call the REST API directly — Python SDK coming soon.

```bash
pip install requests python-dotenv
```

---

## 🔑 Get Your Free API Key

```bash
curl -X POST https://thermomind-production.up.railway.app/keys/trial \
  -H "Content-Type: application/json" \
  -d '{"email": "you@example.com", "name": "your-project"}'
```

**Response:**
```json
{
  "status": "trial key created",
  "api_key": "tm_p1_xxxxxxxxxxxxxxxx",
  "monthly_lives": 500
}
```

<table>
<tr>
<th>Key Prefix</th>
<th>Tier</th>
<th>Access</th>
<th>Price</th>
</tr>
<tr>
<td><code>tm_p1_...</code></td>
<td>Player One</td>
<td>Sessions, events, state, guidance</td>
<td>Free — 500 lives/mo</td>
</tr>
<tr>
<td><code>tm_p2_...</code></td>
<td>Player Two</td>
<td>+ TCI grade, GCL glyphs, OSIRIS telemetry</td>
<td>$39/mo — 7,500 lives</td>
</tr>
<tr>
<td><code>tm_op_...</code></td>
<td>Operator Mode</td>
<td>Full access + admin</td>
<td>Enterprise</td>
</tr>
</table>

**Need more lives?** Top up at [bapxai.com](https://bapxai.com) — packs never expire.

| 🧪 Potion | 🧪 Hi-Potion | ✨ Elixir | 🌟 Mega Elixir |
|-----------|-------------|---------|--------------|
| 1,000 lives | 3,000 lives | 10,000 lives | 25,000 lives |
| $5 | $12 | $30 | $60 |

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
  // Your LLM now remembers forever — no other changes needed
}
run();
```

### Python (any model via REST)

```python
import os, requests

TM_BASE = "https://thermomind-production.up.railway.app"
headers = {"Authorization": f"Bearer {os.environ['TM_KEY']}",
           "Content-Type": "application/json"}

# Create session
session = requests.post(f"{TM_BASE}/v1/sessions",
    headers=headers, json={"external_id": "user-123"}).json()

# Store event — runs a thermodynamic cycle
requests.post(f"{TM_BASE}/v1/sessions/{session['session_id']}/events",
    headers=headers,
    json={"type": "message_user", "content": "Remember my name is Nile Green.", "role": "user"})

# Get memory — inject into your next LLM call
memory = requests.post(f"{TM_BASE}/v1/sessions/{session['session_id']}/guidance",
    headers=headers, json={}).json()
```

---

## ⚔️ How It Compares

<table>
<tr>
<th>Approach</th>
<th>Memory limit</th>
<th>Learns over time</th>
<th>Needs GPU</th>
<th>Cost per update</th>
</tr>
<tr>
<td>Raw LLM</td>
<td>Context window only</td>
<td>❌</td>
<td>❌</td>
<td>Tokens</td>
</tr>
<tr>
<td>RAG</td>
<td>DB size</td>
<td>❌</td>
<td>❌</td>
<td>Query cost</td>
</tr>
<tr>
<td>Fine-tuning</td>
<td>Model weights</td>
<td>✅</td>
<td>✅</td>
<td>$$$$</td>
</tr>
<tr>
<td>MD file injection (SOUL.md)</td>
<td>~2,200 chars</td>
<td>❌</td>
<td>❌</td>
<td>Tokens</td>
</tr>
<tr>
<td><strong>ThermoMind</strong></td>
<td><strong>Unlimited</strong></td>
<td><strong>✅</strong></td>
<td><strong>❌</strong></td>
<td><strong>Near zero</strong></td>
</tr>
</table>

---

## 📊 What Live Agents Look Like Over Time

```
Cycle  Surplus  Drift  Stability  Grade  Event
──────────────────────────────────────────────────────────────
00001    0.41     0.31   0.55       B      session_start         ← fresh agent
00012    0.53     0.22   0.61       B      memory_store
00047    0.68     0.14   0.74       A      coherence_peak
00088    0.72     0.11   0.81       A      identity_stable
00134    0.74     0.09   0.88       A      generativity_onset
00200    0.81     0.07   0.91       A+     long_horizon_stable   ← same agent, 200 cycles later
```

> Agents with identical starting states diverge over time based on their history.
> That divergence isn't a bug. **That's the whole point.**

🖥️ **[Watch it live](https://thermomind-production.up.railway.app/demo)** — real-time OSIRIS_OS × ThermoMind × TCI telemetry.

---

## 🔬 What's Happening Under the Hood

> Not a prompt trick. No fine-tuning. No RAG. No vectors. No MD files. No char limits.

```python
# Real engine math — thermomind_engine.py
gap         = sqrt(sum((reality - prediction)²) / n)  # thermodynamic surprise
free_energy = vitality * energy_reserve - (T_cognitive * H_reality)  # Helmholtz F = U - TS
work_required = k_B * T_cognitive * ln(2) * delta_H   # Landauer's principle — memory has a cost

# Phase transitions — no GPU, no gradients, pure physics
if T_cognitive < 0.35:  regime = "stable"   # crystallized
if T_cognitive > 0.70:  regime = "drift"    # molten / high plasticity
else:                   regime = "noisy"    # turbulent
```

> Gap shrinks → agent converges → Φ (consciousness level) rises.
> Surprise spikes → energy burns → agent enters learning mode.
> **Actual thermodynamics. Running in a database. No tokens consumed.**

---

## 🛠️ What the Engine Tracks

<table>
<tr>
<th>Metric</th>
<th>What It Does</th>
</tr>
<tr><td>🔥 <strong>Surplus</strong></td><td>How much energy the agent has to grow and explore</td></tr>
<tr><td>〰️ <strong>Drift</strong></td><td>Catches when your agent starts acting different from itself</td></tr>
<tr><td>🧲 <strong>Stability</strong></td><td>Keeps your agent coherent across sessions</td></tr>
<tr><td>🧬 <strong>Identity</strong></td><td>Tracks who this agent actually is right now</td></tr>
<tr><td>🧠 <strong>Memory</strong></td><td>Stores and surfaces what the agent has retained over time</td></tr>
<tr><td>⚡ <strong>Φ (Phi)</strong></td><td>Integrated consciousness score — rises as the agent converges</td></tr>
<tr><td>🎯 <strong>TCI Grade</strong></td><td>A+ to F — overall cognitive health score (Player Two tier)</td></tr>
<tr><td>🔷 <strong>GCL Glyph</strong></td><td>27-position vector space coordinate (Player Two tier)</td></tr>
</table>

---

## 🏎️ Works With Everything

<table>
<tr>
<th>Model</th>
<th>Framework</th>
<th>Example</th>
</tr>
<tr>
<td>GPT-4o, GPT-4o-mini</td>
<td>OpenAI SDK · LangChain</td>
<td><a href="./examples/basic.js">basic.js</a></td>
</tr>
<tr>
<td>Claude (any version)</td>
<td>Anthropic SDK</td>
<td><a href="./examples/claude_example.py">claude_example.py</a> · <a href="./examples/claude_example.js">claude_example.js</a></td>
</tr>
<tr>
<td>DeepSeek</td>
<td>LangChain · Raw API</td>
<td><a href="./examples/deepseek-example.py">deepseek_example.py</a></td>
</tr>
<tr>
<td>Mistral Large</td>
<td>Mistral SDK</td>
<td><a href="./examples/mistral_example.py">mistral_example.py</a></td>
</tr>
<tr>
<td>Llama, Gemini, any open-weight</td>
<td>Any OpenAI-compatible client</td>
<td>coming soon</td>
</tr>
</table>

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

## 🏛️ Research Foundation

> Built on the Thermodynamic Cognition Index (TCI).
> Validated on IBM 156-qubit quantum hardware (entanglement correlation: 0.9688).

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

## 🔒 Security

- Your LLM weights are never touched or stored
- Your conversations are never used for training
- State data is encrypted at rest
- All API calls require authenticated headers

---

## 🤝 Community & Support

<table>
<tr>
<td>🐛 <strong>Issues</strong></td>
<td><a href="../../issues">GitHub Issues</a></td>
</tr>
<tr>
<td>📡 <strong>Updates</strong></td>
<td><a href="https://twitter.com/Permamind">@Permamind</a> on X</td>
</tr>
<tr>
<td>☕ <strong>Support the work</strong></td>
<td><a href="https://buymeacoffee.com/permamind">Buy Me a Coffee</a></td>
</tr>
</table>

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

<div align="center">

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

</div>

