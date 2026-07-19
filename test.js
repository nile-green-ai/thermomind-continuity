require("dotenv").config();
const { ThermoMind } = require("./src/index.js");

(async () => {
  console.log("🛰️ Initializing ThermoMind SDK for Local Integration Test...");

  const apiKey = process.env.TM_TEST_KEY;
  if (!apiKey) {
    console.error("Missing TM_TEST_KEY in your .env — set it to a trial key before running this test.");
    process.exit(1);
  }

  // NOTE: was previously "baseURL" (capital URL) — the constructor destructures
  // "baseUrl" (lowercase r), so the mismatched key was silently ignored and this
  // test was actually hitting production, not localhost. Fixed below.
  const tm = new ThermoMind({
    apiKey,
    baseUrl: process.env.TM_TEST_BASE_URL || "http://localhost:8000",
  });

  console.log("Creating session...");
  const session = await tm.createSession({ externalId: "geo-test" });
  console.log("Session:", session);

  const id = session.session_id;

  console.log("Appending event...");
  await tm.appendEvent(id, { type: "message", content: "Hello ThermoMind", role: "user" });
  console.log("Event appended successfully.");

  console.log("Getting state...");
  const state = await tm.getState(id);
  console.log("State:", state);

  console.log("Getting guidance...");
  const guide = await tm.getGuidance(id, {
    context: "Geo is testing the SDK",
    max_hints: 2,
  });
  console.log("Guidance:", guide);

  console.log("\n✅ Local verification sequence complete.");
})().catch((err) => {
  console.error("❌ Integration test failed:", err.message);
  process.exit(1);
});
