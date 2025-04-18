import { API_OPTIONS_TMDB, TMDB_APIS } from "../utils/constant.js";
import fetch from "node-fetch";

async function getNowPlaying (req, res, next) {
    try{
        let result = await fetch(TMDB_APIS.get_now_playing_movies, API_OPTIONS_TMDB);
        console.log("we are here");
        result = await result.json();
        console.log('result : ' + result);
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

export { getNowPlaying, getPopular, getTopRated };
