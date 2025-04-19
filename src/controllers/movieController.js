import { getApiOptionsTmdb, TMDB_APIS } from "../utils/constant.js";
import fetch from "node-fetch";

async function getNowPlaying (req, res, next) {
    try{
        let result = await fetch(TMDB_APIS.get_now_playing_movies, getApiOptionsTmdb());
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
        let result = await fetch(TMDB_APIS.get_popular_movies, getApiOptionsTmdb());
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
        let result = await fetch(TMDB_APIS.get_top_rated_movies, getApiOptionsTmdb());
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
