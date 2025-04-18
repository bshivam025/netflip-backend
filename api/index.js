import app from "../src/index.js";
import serverless from "serverless-http";

console.log("🌀 api/index.js hit!"); // for debug
console.error("🌀 api/index.js hit!"); // for debug

export default serverless(app);
