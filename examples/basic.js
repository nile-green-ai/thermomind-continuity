// thermomind-continuity/examples/basic.js
require("dotenv").config();
const { OpenAI } = require("openai"); // Standard OpenAI package
const { ThermoMind } = require("../src/index.js");

// Initialize ThermoMind with your backend token
const tm = new ThermoMind({ apiKey: process.env.TM_KEY });

// Initialize standard OpenAI client, then snap the Game Genie cartridge on top of it!
let openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
openai = tm.wrapOpenAI(openai);

async function run() {
  console.log("Creating a continuous ThermoMind session...");
  // 1. Create a persistent session for a specific user or custom agent identity
  const session = await tm.createSession({ externalId: "user-is-john-doe" });
  const sessionId = session.session_id;

  console.log(`Session synchronized! ID: ${sessionId}`);

  // 2. Run a standard chat call. Notice how we just pass 'thermoSessionId' right inside it.
  console.log("\nSending first message via standard OpenAI client wrapper...");
  const response1 = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    thermoSessionId: sessionId, // This tells the Game Genie to intercept and inject state
    messages: [
      { role: "system", content: "You are a helpful AI companion." },
      { role: "user", content: "Hey! Remember this secret phrase: 'The orange fox jumps at midnight'." }
    ]
  });

  console.log("AI Response 1:", response1.choices[0].message.content);

  // 3. To prove the continuity is working across different requests, let's run a brand new call
  console.log("\nSending second message a bit later (Simulating a totally new session context)...");
  const response2 = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    thermoSessionId: sessionId, // Passing the same session ID pulls the continuous track back up
    messages: [
      { role: "system", content: "You are a helpful AI companion." },
      { role: "user", content: "What was that secret phrase I told you earlier?" }
    ]
  });

  console.log("AI Response 2 (Should recall history via ThermoMind):");
  console.log(response2.choices[0].message.content);
}

run().catch(console.error);
