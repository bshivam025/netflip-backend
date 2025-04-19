import express from "express";
const router = express.Router();
import { getNowPlaying, getPopular, getTopRated, getMovieById, getMovieBySearch, getMovieVideo, getSimilarMovie } from "../controllers/movieController.js";

router.get("/now-playing", getNowPlaying);
router.get("/popular", getPopular);
router.get("/top-rated", getTopRated);
router.get("/fetch-movie-by-id/:id", getMovieById);
router.get("/fetch-movie-by-search/:name", getMovieBySearch);
router.get("/fetch-similar-movie/:id", getSimilarMovie);
router.get("/fetch-movie-video/:id", getMovieVideo);

export default router;
