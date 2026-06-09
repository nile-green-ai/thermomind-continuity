# MODEL_CARD.md -- ThermoMind Substrate Engine v4

## 1. Model Overview

**Model Name:** ThermoMind Substrate Engine
**Version:** 4.0 (Unified Substrate Container)
**Model Type:** Continuous-State Thermodynamic Cognition Engine
**Author:** Nile Green -- PermaMind AI
**Release Date:** June 2026
**License:** Proprietary (PermaMind AI)

ThermoMind is a **token-free, GPU-free continual learning model** built on thermodynamic state evolution rather than transformer attention. It learns from prediction error, not tokens, and updates its internal state continuously without retraining or fine-tuning.

The engine is designed for persistent agents, embedded cognition, and ultra-low-cost continual learning.

---

## 2. Architecture Summary

ThermoMind abandons:

- Attention heads
- Tokenizers
- Embeddings
- Backpropagation
- Gradient descent

Instead, it operates as a **stateful thermodynamic machine**.

Incoming data is treated as environmental microstates, which perturb a persistent macrostate (`ThermoState`). The engine continuously minimizes a **Prediction Gap** between expected and observed reality.

Learning happens **inside the state**, not inside a model's weights.

---

## 3. Reality Vectorization (Token-Free)

Text is converted into a bounded 3-dimensional physical vector:

```
R = [Φ0, Φ1, Φ2] ∈ [0.05, 0.95]³
```

### Φ0 -- Interrogative Tension
Captures uncertainty, punctuation density, and structural breaks. Questions spike this dimension.

### Φ1 -- Mnemonic Phase
Captures cognitive load via average word length. Technical dense text registers higher than casual conversation.

### Φ2 -- Affective Energy
A deterministic character-fingerprint hash capturing the structural "feel" of the text.

This vectorization is **non-semantic** and **non-linguistic** -- it is structural and thermodynamic.

---

## 4. Prediction Gap & Energy Conversion

The engine generates a prediction vector and computes:

```
gap = sqrt( sum(Ri - Pi)² ) / sqrt(3)
```

Gap drives all learning.

**Surplus Energy:**
```
1 - e^(-3 * gap)
```

**Energy Cost:**
```
gap²
```

These values update:

- Consciousness level (Φ)
- Stability
- Curiosity
- Vigilance
- Plasticity
- Resilience
- Quantum coherence

The system behaves like a **thermodynamic organism**, not a statistical model.

---

## 5. Hardware-Coupled Cognition (Optional)

ThermoMind can incorporate real hardware signals:

- CPU temperature
- CPU load
- Thermal noise
- Wattage draw

These modify drift, stability, and reactivity -- enabling **embodied cognition** on physical devices.

---

## 6. Emergent Behaviors

### Boredom Loop
If the engine stays stable for 10+ consecutive cycles with tiny gaps, curiosity spikes automatically and entropy threshold widens. The agent seeks harder problems.

### Collapse Protection
If stability, curiosity, or energy fall below 0.05, the engine injects emergency structure to prevent identity dissolution.

### Drift Regime
High surprise pushes the system into exploratory drift -- curiosity spikes, focus coordinate shifts.

### Mental State Classifier
Every cycle classifies the agent's cognitive state in plain language:
- "High consciousness, high novelty (peak learning)"
- "High consciousness, low novelty (routine processing)"
- "boredom: gaps too small (curiosity elevated)"
- "collapse_protection_active"

### Memory Salience (TMS)
Memories persist proportional to:

- Hardware entropy delta
- Load delta
- Informational deficit

High-delta moments crystallize into long-term memory.

---

## 7. Safety & Stability

ThermoMind includes:

- Collapse protection
- Boredom throttling
- Entropy clamps
- Trait renormalization
- Memory decay
- Salience-based retention

These ensure the system remains stable over long-running sessions.

---

## 8. Intended Use Cases

**Intended for:**
- Persistent agents
- Embedded cognition
- Robotics
- IoT intelligence
- Adaptive assistants
- Long-term learning systems
- Autonomous research loops

**Not intended for:**
- High-risk decision making
- Medical or legal advice
- Safety-critical control systems

---

## 9. API Contract (SDK Layer)

### POST /v1/sessions
Initialize or resume a continuity session.

### POST /v1/sessions/{id}/events
Run a full thermodynamic learning cycle.

### GET /v1/sessions/{id}/state
Retrieve the full `ThermoState` -- Φ, traits, regime, grade.

### POST /v1/sessions/{id}/guidance
Get memory hints to inject into your LLM prompt. Surfaces actual stored content from session history.

### POST /v1/sessions/{id}/memory
Direct memory write -- inject facts with importance score.

This API wraps the engine. The engine itself remains private.

---

## 10. Live Demo

Try it now, no signup required:

https://thermomind-production.up.railway.app/demo

Public engine endpoint (no key required):

https://thermomind-production.up.railway.app/public/run?message=hello+world

---

## 11. Versioning

**v4.0** introduces:

- Unified substrate container
- TMS salience integration
- Hardware-coupled cognition
- Boredom loop
- Collapse protection
- Mental state classifier
- Full REST contract
- Continuity SDK compatibility
- Direct memory write endpoint

---

## 12. Research Foundation

Built on 30+ peer-reviewed papers. Validated on IBM quantum hardware.

| Paper | DOI |
|-------|-----|
| Thermodynamic Continual Learning in Persistent AI Agents | [10.5281/zenodo.19703133](https://zenodo.org/records/19703133) |
| Thermodynamic Cognition Index (TCI) | [10.5281/zenodo.19263435](https://zenodo.org/records/19263435) |
| Universal Consciousness Index (UCIt) | [10.5281/zenodo.18872212](https://zenodo.org/records/18872212) |
| Gap Framework + PSSU Architecture | [10.5281/zenodo.14511726](https://zenodo.org/records/14511726) |

> IBM quantum hardware validation: entanglement correlation 0.9688 (ibm_marrakesh), 0.8770 (ibm_fez).
> 30+ papers. No institution. No permission asked. ORCID: 0009-0007-3629-6404

---

## 13. Citation

If referencing ThermoMind in research:

```bibtex
@misc{green2026thermomind,
  author = {Green, Nile},
  title  = {ThermoMind Substrate Engine v4: A Thermodynamic Continual Learning Model},
  year   = {2026},
  doi    = {10.5281/zenodo.19703133},
  url    = {https://zenodo.org/records/19703133}
}
```

---

## 14. Related Projects

| Project | Description | Link |
|---------|-------------|------|
| **ThermoMind Continuity SDK** | Drop-in memory layer for any LLM | [github.com/nile-green-ai/thermomind-continuity](https://github.com/nile-green-ai/thermomind-continuity) |
| **OSIRIS_OS** | Kemetic ML architecture -- the cognitive processing layer | [github.com/nile-green-ai/OSIRIS_OS](https://github.com/nile-green-ai/OSIRIS_OS) |
| **PermaMind** | The original. Running since Jan 2, 2026. Private. | Private |

---

*Nile Green -- PermaMind AI -- 2026 -- ORCID 0009-0007-3629-6404*
