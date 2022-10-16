const apiKey = process.env.REACT_APP_movieapiKey;
export default {
  getNetflixoriginals: `/discover/tv?api_key=${apiKey}&with_networks=213`,
  getTrending: `/trending/all/week?api_key=${apiKey}&language=en-US`,
  getTopRated: `/movie/top_rated?api_key=${apiKey}&language=en-US`,
  getActionMov: `/discover/movie?api_key=${apiKey}&with_genres=28`,
  getComedyMovies: `/discover/movie?api_key=${apiKey}&with_genres=35`,
  getHorrorMovies: `/discover/movie?api_key=${apiKey}&with_genres=27`,
  getRomanceMovies: `/discover/movie?api_key=${apiKey}&with_genres=10749`,
  getDocumentaries: `/discover/movie?api_key=${apiKey}&with_genres=99`,
};
