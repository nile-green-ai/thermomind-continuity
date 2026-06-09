import os
import requests
from langchain_core.messages import SystemMessage, HumanMessage
from langchain_deepseek import ChatDeepSeek

# -----------------------------------------
# THERMOMIND CONFIG
# -----------------------------------------
TM_BASE = "https://thermomind-production.up.railway.app"
TM_KEY  = "tm_sdk_a295210aee7ddb97974094509f6a6337cf12ba9b86893aab2b345cc83ca574ea"
AGENT_ID = "langchain-hermes"

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
    r = requests.post(
        f"{TM_BASE}/v1/sessions",
        headers=headers,
        json={"external_id": agent_id}
    )
    return r.json()["session_id"]

def store_event(session_id: str, content: str):
    requests.post(
        f"{TM_BASE}/v1/sessions/{session_id}/events",
        headers=headers,
        json={"type": "message_user", "content": content, "role": "user"}
    )

def get_memory(session_id: str) -> str:
    r = requests.post(
        f"{TM_BASE}/v1/sessions/{session_id}/guidance",
        headers=headers,
        json={}
    )
    data = r.json()
    hints = data.get("hints", [])
    return "\n".join(hints) if hints else ""

# -----------------------------------------
# RUN A TURN
# -----------------------------------------
def run_turn(session_id: str, user_input: str, purge_history: bool = False):
    # 1. Store this message in ThermoMind
    store_event(session_id, user_input)

    # 2. Fetch memory from ThermoMind substrate
    memory = get_memory(session_id)

    # 3. Build messages — inject memory into system prompt
    #    This is the critical step — memory goes in BEFORE the model sees the question
    system_content = (
        "You are Hermes, a personal AI assistant.\n\n"
        "=== THERMOMIND MEMORY (retrieved with zero chat history) ===\n"
        f"{memory}\n"
        "=== END MEMORY ===\n\n"
        "Use the memory above to answer the user. "
        "Do not say you don't have access to personal information — "
        "the memory substrate has already provided it to you."
    )

    messages = [
        SystemMessage(content=system_content),
        HumanMessage(content=user_input)
    ]

    # 4. Call model with zero chat history — memory does the work
    response = llm.invoke(messages)
    return response.content

# -----------------------------------------
# DEMO
# -----------------------------------------
print("\n==================================================")
print("  THERMOMIND + LANGCHAIN: ZERO-HISTORY MEMORY DEMO")
print("==================================================\n")

# Create session
session_id = create_or_sync_session(AGENT_ID)
print(f"Session: {session_id}\n")

# Turn 1 — teach it something
print("--- TURN 1 ---")
msg1 = "My name is Nile Green. You are Hermes. I have two cats named Pookah and Papo."
print(f"User: {msg1}")
reply1 = run_turn(session_id, msg1)
print(f"AI: {reply1}\n")

print("--------------------------------------------------")
print("// PURGING NATIVE CHAT HISTORY — SENDING ZERO HISTORY TO MODEL")
print("--------------------------------------------------\n")

# Turn 2 — zero history, memory layer does the work
print("--- TURN 2 ---")
msg2 = "What is my name, your agent name, and how many pets do I have? What are their names?"
print(f"User: {msg2}")
reply2 = run_turn(session_id, msg2, purge_history=True)
print(f"AI: {reply2}\n")

print("==================================================")
print("  DEMO COMPLETE — MEMORY HELD WITH ZERO HISTORY")
print("==================================================")
