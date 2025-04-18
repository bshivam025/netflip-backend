const app = require("../src/index");
const serverless = requrie("serverless-http");

module.exports = serverless(app);