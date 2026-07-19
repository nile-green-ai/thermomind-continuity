import requests


class ThermoMindError(Exception):
    """Base exception for all ThermoMind SDK errors."""
    pass


class ThermoMindAuthError(ThermoMindError):
    """Raised on 401 — invalid or inactive API key."""
    pass


class ThermoMindDepletedError(ThermoMindError):
    """
    Raised on 402 — the account is out of cycles (monthly allowance +
    packs both exhausted). Callers should catch this specifically to
    prompt the user to buy a pack or upgrade, rather than treating it
    as a generic failure.
    """
    def __init__(self, message, item_shop=None):
        super().__init__(message)
        self.item_shop = item_shop


class ThermoMindNotFoundError(ThermoMindError):
    """Raised on 404 — session (or resource) not found."""
    pass


class ThermoMindAPIError(ThermoMindError):
    """Raised on any other non-2xx response."""
    def __init__(self, message, status_code=None, response_body=None):
        super().__init__(message)
        self.status_code = status_code
        self.response_body = response_body


class ThermoMind:
    """
    Python client for the ThermoMind Continuity API.

    Example:
        client = ThermoMind(api_key="tm_p1_...")
        session = client.create_session(external_id="my-agent")
        client.append_event(session["session_id"], {
            "type": "message", "content": "Hello", "role": "user"
        })
        guidance = client.get_guidance(session["session_id"])
    """

    def __init__(self, api_key: str, base_url: str = "https://thermomind-production.up.railway.app", timeout: float = 15.0):
        if not api_key:
            raise ValueError("ThermoMind: api_key is required")
        self.api_key = api_key
        self.base_url = base_url.rstrip("/")
        self.timeout = timeout
        self._headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json",
        }

    def _request(self, method: str, path: str, json: dict = None) -> dict:
        url = f"{self.base_url}{path}"
        try:
            resp = requests.request(
                method,
                url,
                json=json,
                headers=self._headers,
                timeout=self.timeout,
            )
        except requests.exceptions.Timeout:
            raise ThermoMindError(f"Request to {path} timed out after {self.timeout}s")
        except requests.exceptions.ConnectionError as e:
            raise ThermoMindError(f"Could not connect to ThermoMind at {self.base_url}: {e}")

        if resp.status_code == 401:
            raise ThermoMindAuthError("Invalid or inactive API key.")

        if resp.status_code == 402:
            try:
                body = resp.json()
            except ValueError:
                body = {}
            raise ThermoMindDepletedError(
                body.get("detail", "Out of cycles — purchase a pack or upgrade your plan."),
                item_shop=body.get("items"),
            )

        if resp.status_code == 404:
            raise ThermoMindNotFoundError(f"Resource not found: {path}")

        if not resp.ok:
            try:
                body = resp.json()
                detail = body.get("detail", resp.text)
            except ValueError:
                detail = resp.text
            raise ThermoMindAPIError(
                f"ThermoMind {method} {path} failed: {resp.status_code} — {detail}",
                status_code=resp.status_code,
                response_body=detail,
            )

        try:
            return resp.json()
        except ValueError:
            raise ThermoMindError(f"ThermoMind {method} {path} returned a non-JSON response.")

    def create_session(self, external_id: str = None, metadata: dict = None) -> dict:
        return self._request("POST", "/v1/sessions", {
            "external_id": external_id,
            "metadata": metadata or {},
        })

    def append_event(self, session_id: str, event: dict) -> dict:
        if not session_id:
            raise ValueError("session_id is required")
        return self._request("POST", f"/v1/sessions/{session_id}/events", {
            "type": event.get("type"),
            "content": event.get("content"),
            "role": event.get("role"),
            "data": event.get("data"),
        })

    def get_state(self, session_id: str) -> dict:
        if not session_id:
            raise ValueError("session_id is required")
        return self._request("GET", f"/v1/sessions/{session_id}/state")

    def write_memory(self, session_id: str, content: str, kind: str = "fact", importance: float = 0.5) -> dict:
        if not session_id:
            raise ValueError("session_id is required")
        return self._request("POST", f"/v1/sessions/{session_id}/memory", {
            "kind": kind,
            "content": content,
            "importance": importance,
        })

    def get_guidance(self, session_id: str, context: str = "", max_hints: int = 3) -> dict:
        if not session_id:
            raise ValueError("session_id is required")
        return self._request("POST", f"/v1/sessions/{session_id}/guidance", {
            "context": context,
            "max_hints": max_hints,
        })
