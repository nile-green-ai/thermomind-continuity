require("dotenv").config();
const { ThermoMind } = require("../src/index.js");

// Load API key from .env
const tm = new ThermoMind({ apiKey: process.env.TM_KEY });

async function run() {
  // 1. Create a persistent session
  const session = await tm.createSession({ externalId: "demo-agent" });

  // 2. Append a user event — triggers continuity update
  await tm.appendEvent(session.session_id, {
    type: "message_user",
    content: "Hello",
    role: "user"
  });

  // 3. Request continuity-aware guidance
  const guidance = await tm.getGuidance(session.session_id, {
    context: "demo"
  });

  // 4. Output the guidance
  console.log("Guidance:", guidance);
}

run().catch(console.error);

