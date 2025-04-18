const {API_OPTIONS_TMDB, TMDB_APIS} = require("../utils/constant");
import fetch from "node-fetch";

async function getNowPlaying (req, res, next) {
    try{
        let result = await fetch(TMDB_APIS.get_now_playing_movies, API_OPTIONS_TMDB);
        result = await result.json();
        res.json({
            success: true,
            data: result
        });
    } catch(error) {
        console.error("error in fetching now playing movies : ", error);
        res.json({
            success: false,
            data: "Something went wrong"
        })
    }
}

async function getPopular (req, res, next) {
    try{
        let result = await fetch(TMDB_APIS.get_popular_movies, API_OPTIONS_TMDB);
        result = await result.json();
        res.json({
            success: true,
            data: result
        });
    } catch(error) {
        console.error("error in fetching now playing movies : ", error);
        res.json({
            success: false,
            data: "Something went wrong"
        })
    }
}

async function getTopRated (req, res, next) {
    try{
        let result = await fetch(TMDB_APIS.get_top_rated_movies, API_OPTIONS_TMDB);
        result = await result.json();
        res.json({
            success: true,
            data: result
        });
    } catch(error) {
        console.error("error in fetching now playing movies : ", error);
        res.json({
            success: false,
            data: "Something went wrong"
        })
    }
}

module.exports = {
    getNowPlaying,
    getPopular,
    getTopRated
}