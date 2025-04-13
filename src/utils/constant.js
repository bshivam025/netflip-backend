const API_OPTIONS_TMDB = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.TMDB_AUTH,
  },
};

const TMDB_APIS = {
  get_now_playing_movies:
    "https://api.themoviedb.org/3/movie/now_playing?page=1",
  get_movie_video: "https://api.themoviedb.org/3/movie/{MOVIE_ID}/videos?",
  get_popular_movies: "https://api.themoviedb.org/3/movie/popular?page=1",
  get_top_rated_movies: "https://api.themoviedb.org/3/movie/top_rated?&page=1",
  get_search_result: "https://api.themoviedb.org/3/search/movie?query=",
  get_movie_by_id: "https://api.themoviedb.org/3/movie/",
  get_similar_movies:
    "https://api.themoviedb.org/3/movie/{MOVIE_ID}/similar?language=en-US&page=1",
};



module.exports = {
    API_OPTIONS_TMDB,
    TMDB_APIS
}