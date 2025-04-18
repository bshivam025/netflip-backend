import express from "express";
const router = express.Router();
import { getNowPlaying, getPopular, getTopRated } from "../controllers/movieController.js";

router.get("/now-playing", getNowPlaying);
router.get("/popular", getPopular);
router.get("/top-rated", getTopRated);

export default router;
