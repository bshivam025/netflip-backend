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

async function getMovieById(req, res, next) {
    let movieId = req.params.id;
    try{
        if(movieId){
            let api = TMDB_APIS.get_movie_by_id + movieId + "?";
            let result = await fetch(api, getApiOptionsTmdb());
            result = await result.json();
            res.json({
                success: true,
                data: result
            });
        }
    } catch(error){
        console.error("error in fetching now playing movies : ", error);
        res.json({
            success: false,
            data: "Something went wrong"
        })
    }
}

async function getMovieVideo(req, res, next) {
    let movieId = req.params.id;
    try{
        if(movieId){
            let api = TMDB_APIS.get_movie_video.replace('{MOVIE_ID}', movieId);
            let result = await fetch(api, getApiOptionsTmdb());
            result = await result.json();
            res.json({
                success: true,
                data: result
            });
        }
    } catch(error){
        console.error("error in fetching now playing movies : ", error);
        res.json({
            success: false,
            data: "Something went wrong"
        })
    }
}

async function getSimilarMovie(req, res, next) {
    let movieId = req.params.id;
    try{
        if(movieId){
            let api = TMDB_APIS.get_similar_movies.replace('{MOVIE_ID}', movieId);
            let result = await fetch(api, getApiOptionsTmdb());
            result = await result.json();
            res.json({
                success: true,
                data: result
            });
        }
    } catch(error){
        console.error("error in fetching now playing movies : ", error);
        res.json({
            success: false,
            data: "Something went wrong"
        })
    }
}

async function getMovieBySearch(req, res, next) {
    let movieName = req.params.name;
    try{
        if(movieName){
            let api = TMDB_APIS.get_search_result + movieName;
            let result = await fetch(api, getApiOptionsTmdb());
            result = await result.json();
            res.json({
                success: true,
                data: result
            });
        }
    } catch(error){
        console.error("error in fetching now playing movies : ", error);
        res.json({
            success: false,
            data: "Something went wrong"
        })
    }
}

export { getNowPlaying, getPopular, getTopRated, getMovieById, getMovieBySearch, getMovieVideo, getSimilarMovie};
