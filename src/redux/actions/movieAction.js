import api from "../api"

const API_KEY=process.env.REACT_APP_API_KEY

function getMovies() {

    return async (dispatch) => {

        const popularMovieApi = await api.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)

        // let url = `https://api.themoviedb.org/3/movie/popular?api_key=&language=en-US&page=1`
        // let response = await fetch(url)
        // let data = await response.json()

        // let url2 = 
        // `https://api.themoviedb.org/3/movie/top_rated?api_key=&language=en-US&page=1`
        
        // let url3 = `https://api.themoviedb.org/3/movie/upcoming?api_key=&language=en-US&page=1`
    }
}

export const movieAction = {
    getMovies,
};