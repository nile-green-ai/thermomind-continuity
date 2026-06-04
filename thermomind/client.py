import requests

class ThermoMind:
    def __init__(self, api_key: str, base_url="https://thermomind-production.up.railway.app"):
        self.api_key = api_key
        self.base_url = base_url

    def create_session(self, external_id: str):
        r = requests.post(
            f"{self.base_url}/v1/sessions",
            json={"external_id": external_id},
            headers={"Authorization": f"Bearer {self.api_key}"}
        )
        return r.json()

    def append_event(self, session_id: str, event: dict):
        r = requests.post(
            f"{self.base_url}/v1/sessions/{session_id}/events",
            json=event,
            headers={"Authorization": f"Bearer {self.api_key}"}
        )
        return r.json()

    def get_guidance(self, session_id: str):
        r = requests.post(
            f"{self.base_url}/v1/sessions/{session_id}/guidance",
            headers={"Authorization": f"Bearer {self.api_key}"}
        )
        return r.json()

