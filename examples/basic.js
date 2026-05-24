const { ThermoMind } = require("../src/index.js");

const tm = new ThermoMind({ apiKey: "YOUR_API_KEY_HERE" });

async function run() {
  const session = await tm.createSession({ externalId: "demo-agent" });

  await tm.appendEvent(session.session_id, {
    type: "message_user",
    content: "Hello",
    role: "user"
  });

  const guidance = await tm.getGuidance(session.session_id, {
    context: "demo"
  });

  console.log(guidance);
}

run().catch(console.error);
