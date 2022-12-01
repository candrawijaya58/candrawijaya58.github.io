import './App.css';
import {getMovieList,searchMovie} from './api';
import { useEffect, useState } from 'react';

const App =() => {

  const [populerMovie,setPopulerMovie] = useState([])

  useEffect(()=>{
    getMovieList().then ((resault) =>{
      setPopulerMovie(resault)
    })
  },[])

  const PopularMovieList = () =>{

     return populerMovie.map((movie,i) =>{

      return(<div key={i}>
        <div className="Movie-wrapper">
        <div className="Movie-title">{movie.title}</div>
        <img className='Movie-image' src= {`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='movieImage' />
        <div className='Movie-date'>{movie.release_date}</div>
        <div className='Movie-rate'>{movie.vote_average}</div>
      </div>
      </div>
      
      )
     })
  }

  const search = async (q)=>{
    if(q.length >3){

    const query = await searchMovie(q)

    setPopulerMovie(query.results)
  }
  }
  return (
    <div className="App">
      <header className="App-header">
      <h1>CH MOVIE ENTERTIMENT</h1>
      <input 
       placeholder="Cari film kesayangan"
       className='Movie-search'
       onChange={({target}) => search(target.value)}/>
      <div className="Movie-container"> 
      <PopularMovieList/>
      </div>
      </header>
      
    </div>
  );
}

export default App;
