import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";

import movieRoutes from "./routes/movies.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello from Netflix GPT Backend!");
});

app.use("/backend/movies", movieRoutes);

export default app;
