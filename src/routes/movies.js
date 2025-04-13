const express = require("express");
const router = express.Router();
const {
    getNowPlaying,
    getPopular,
    getTopRated
} = require("../controllers/movieController")

router.get("/now-playing", getNowPlaying)
router.get("/popular", getPopular)
router.get("/top-rated", getTopRated)

module.exports = router;