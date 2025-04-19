export const getApiOptionsTmdb = () => ({
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.TMDB_AUTH,
  },
});

export const TMDB_APIS = {
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

export const TMDB_READ_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2VhNjMzMzI4OWY4N2U3OWFmNmZmOGZjNTZhZDQzZSIsIm5iZiI6MTc0MDQ4NTM3NC4wNTksInN1YiI6IjY3YmRiMmZlZWY0YWUyOWRmYjJkYjZmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7YguNdhAmbEXWPbwLbUomQFy_clh7YcB-IeeKe1gS3E";
export const TMDB_API_KEY = "87ea6333289f87e79af6ff8fc56ad43e";