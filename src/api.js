import axios from "axios"




export const getMovieList = async() => {

    const movie = await axios.get(`https://api.themoviedb.org/3//movie/popular?api_key=bd2ec29a23d35e8110c974ef44aa042c`)


    return movie.data.results

}

export const searchMovie = async (q)=>{

    const search = await axios.get(`https://api.themoviedb.org/3//search/movie?query=${q}&api_key=bd2ec29a23d35e8110c974ef44aa042c`)

    return search.data
}