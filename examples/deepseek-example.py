"""
ThermoMind Continuity SDK — DeepSeek Example
---------------------------------------------
Demonstrates persistent memory across turns using the ThermoMind
substrate engine with LangChain + DeepSeek.

Requirements:
    pip install langchain-deepseek langchain-core requests python-dotenv

Environment variables:
    DEEPSEEK_API_KEY=your_deepseek_key
    TM_KEY=your_thermomind_sdk_key  (get one at thermomind-production.up.railway.app/keys/trial)
"""

import os
import requests
from langchain_core.messages import SystemMessage, HumanMessage
from langchain_deepseek import ChatDeepSeek

# -----------------------------------------
# THERMOMIND CONFIG
# -----------------------------------------
TM_BASE  = "https://thermomind-production.up.railway.app"
TM_KEY   = os.environ.get("TM_KEY")
AGENT_ID = "deepseek-agent"  # change this to create a new persistent session

headers = {
    "Authorization": f"Bearer {TM_KEY}",
    "Content-Type": "application/json"
}

# -----------------------------------------
# DEEPSEEK MODEL
# -----------------------------------------
llm = ChatDeepSeek(
    model="deepseek-chat",
    temperature=0.2,
    api_key=os.environ.get("DEEPSEEK_API_KEY")
)

# -----------------------------------------
# THERMOMIND HELPERS
# -----------------------------------------
def create_or_sync_session(agent_id: str) -> str:
    """Create a new session or resume an existing one by external_id."""
    r = requests.post(
        f"{TM_BASE}/v1/sessions",
        headers=headers,
        json={"external_id": agent_id}
    )
    return r.json()["session_id"]

def store_event(session_id: str, content: str):
    """Store a user message and run a thermodynamic engine cycle."""
    requests.post(
        f"{TM_BASE}/v1/sessions/{session_id}/events",
        headers=headers,
        json={"type": "message_user", "content": content, "role": "user"}
    )

def get_memory(session_id: str) -> str:
    """Retrieve memory hints from the substrate — no chat history required."""
    r = requests.post(
        f"{TM_BASE}/v1/sessions/{session_id}/guidance",
        headers=headers,
        json={}
    )
    hints = r.json().get("hints", [])
    return "\n".join(hints) if hints else ""

# -----------------------------------------
# RUN A SINGLE TURN
# -----------------------------------------
def run_turn(session_id: str, user_input: str) -> str:
    # 1. Store message in ThermoMind substrate
    store_event(session_id, user_input)

    # 2. Fetch memory — this is what survives across sessions
    memory = get_memory(session_id)

    # 3. Inject memory into system prompt
    #    The LLM receives zero chat history — memory does all the work
    system_content = (
        "You are a helpful AI assistant.\n\n"
        "=== THERMOMIND MEMORY (retrieved with zero chat history) ===\n"
        f"{memory}\n"
        "=== END MEMORY ===\n\n"
        "Use the memory above to maintain continuity with the user. "
        "Do not say you lack access to prior context — the substrate has provided it."
    )

    messages = [
        SystemMessage(content=system_content),
        HumanMessage(content=user_input)
    ]

    # 4. Call model — no chat history array passed
    response = llm.invoke(messages)
    return response.content

# -----------------------------------------
# DEMO
# -----------------------------------------
if __name__ == "__main__":
    print("\n==================================================")
    print("  THERMOMIND + DEEPSEEK: ZERO-HISTORY MEMORY DEMO")
    print("==================================================\n")

    session_id = create_or_sync_session(AGENT_ID)
    print(f"Session: {session_id}\n")

    # Turn 1 — introduce yourself
    print("--- TURN 1 ---")
    msg1 = "My name is Nile Green. Remember that."
    print(f"User: {msg1}")
    print(f"AI: {run_turn(session_id, msg1)}\n")

    print("-" * 50)
    print("// PURGING NATIVE CHAT HISTORY — SENDING ZERO HISTORY")
    print("-" * 50 + "\n")

    # Turn 2 — zero history sent, substrate holds everything
    print("--- TURN 2 ---")
    msg2 = "What is my name?"
    print(f"User: {msg2}")
    print(f"AI: {run_turn(session_id, msg2)}\n")

    print("==================================================")
    print("  DEMO COMPLETE — MEMORY HELD WITH ZERO HISTORY")
    print("==================================================")
