require("dotenv").config();
const { ThermoMind } = require("./src/index.js");

(async () => {
  console.log("🛰️ Initializing ThermoMind SDK for Local Integration Test...");

  // Configured with your personal local SDK key
  const tm = new ThermoMind({ 
    apiKey: "tm_sdk_4810e8ed7a38c9d767b6733f04172100930d6cdc29726c08c14417f95ca5c8fd", 
    baseURL: "http://localhost:8000" 
  });

  console.log("Creating session...");
  const session = await tm.createSession({ externalId: "geo-test" });
  console.log("Session:", session);

  const id = session.session_id;

  console.log("Appending event...");
  const eventResult = await tm.appendEvent(id, { type: "message", content: "Hello ThermoMind", role: "user" });
  console.log("Event appended successfully.");

  console.log("Getting state...");
  const state = await tm.getState(id);
  console.log("State:", state);

  console.log("Getting guidance...");
  const guide = await tm.getGuidance(id, {
    context: "Geo is testing the SDK",
    max_hints: 2
  });
  console.log("Guidance:", guide);
  
  console.log("\n✅ Local verification sequence complete.");
})();
