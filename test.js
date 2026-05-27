require("dotenv").config();
const { ThermoMind } = require("./src/index.js");

(async () => {
  // Secured: Pulls token from environment variables instead of hardcoding
  const apiKey = process.env.TM_KEY || "YOUR_ENV_TM_KEY";
  
  if (apiKey === "YOUR_ENV_TM_KEY") {
    console.warn("Warning: Using placeholder key. Please ensure TM_KEY is set in your environment.");
  }

  const tm = new ThermoMind({ apiKey });

  console.log("Creating session...");
  const session = await tm.createSession({ externalId: "geo-test" });
  console.log("Session:", session);

  const id = session.session_id;

  console.log("Appending event...");
  await tm.appendEvent(id, { type: "message", content: "Hello ThermoMind", role: "user" });

  console.log("Getting state...");
  const state = await tm.getState(id);
  console.log("State:", state);

  console.log("Writing memory...");
  await tm.writeMemory(id, { kind: "fact", content: "Geo likes physics" });

  console.log("Querying memory...");
  const mem = await tm.queryMemory(id, "Geo");
  console.log("Memory:", mem);

  console.log("Getting guidance...");
  const guide = await tm.getGuidance(id, {
    context: "Geo is testing the SDK",
    max_hints: 2
  });
  console.log("Guidance:", guide);
})();
