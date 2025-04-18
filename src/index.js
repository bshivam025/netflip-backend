import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";

dotenv.config(); // .env file load karna

const app = express(); // Express app setup

app.use(cors()); // CORS fix yahi
app.use(morgan("dev")); // Middleware: Logging requests using morgan

// Home Route
app.get("/", (req, res) => {
    res.send("Hello from Netflix GPT Backend!");
  });

const PORT = process.env.PORT || 5000;

import movieRoutes from "./routes/movies.js";

app.use("/api/movies", movieRoutes);

export default app;

// if (import.meta.url === import.meta.resolve(".")) {
//   const PORT = process.env.PORT || 5000;
//   app.listen(PORT, () => {
//     console.log("Abhi hum zinda hain is port pe:", PORT);
//   });
// }
