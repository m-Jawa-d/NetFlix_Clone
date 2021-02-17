const api_Key=`YOUR_API_KEY_HERE`;

const movies_requests = {
fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${api_Key}&language=en-US`, 
fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${api_Key}&with_networks=213`,
fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_Key}&language=en-US`,
fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_Key}&with_genres=27`,
fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_Key}&with_genres=28`,
fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_Key}&with_genres=35`,
fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_Key}&with_genre=10749`,
fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${api_Key}&with_genres=99`,
}
export default movies_requests;