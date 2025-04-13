const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config(); // .env file load karna

const app = express(); // Express app setup

app.use(morgan("dev")); // Middleware: Logging requests using morgan

// Home Route
app.get("/", (req, res) => {
    res.send("Hello from Netflix GPT Backend!");
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log("Abhi hum zinda hain is port pe :" , PORT);
})