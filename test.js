const { ThermoMind } = require("./src/index.js");

(async () => {
  const tm = new ThermoMind({
    apiKey: "213c13968af87121d1cbaf20d7be7241811f8916b0f59f48cc63b92623b6574d"
  });

  console.log("Creating session...");
  const session = await tm.createSession({ externalId: "geo-test" });
  console.log("Session:", session);

  const id = session.session_id;

  console.log("Appending event...");
  // Fixed schema payload alignment
  await tm.appendEvent(id, { type: "message", content: "Hello ThermoMind", role: "user" });

  console.log("Getting state...");
  const state = await tm.getState(id);
  console.log("State:", state);

  console.log("Writing memory...");
  // Fixed schema payload alignment
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
