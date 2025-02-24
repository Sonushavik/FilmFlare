import React, { useEffect, useState } from 'react'
import { useLoaderData} from 'react-router'
import Card from '../components/UI/Card';
import getMovieData from '../api/GetApiData';

const Movie = () => {
  const initialMovies = useLoaderData();
  const [moviesData, setMoviesData] = useState(initialMovies);
  const [movieName,  setMovieName] = useState("")
// console.log(moviesData);

function searchMoviehandler(){
  setMovieName(event.target.value);
  console.log(movieName)
}

useEffect(() => {
  if(movieName.length>2){
    getMovieData(movieName)
    .then((data)=> {
      if(data.Search) setMoviesData(data);
    })
  }else{
    setMoviesData(initialMovies)
  }
},[movieName,initialMovies]);

  return (
    <>
    <div className="searchBox"
    style={{display: "flex", justifyContent: "center"}}
    >
        <input type="text" id='searchMovie' placeholder='search your favorite Movies ...'
        value={movieName}
        onChange={searchMoviehandler}
        style={{width:"60%", margin: "2rem", borderRadius: "10px"}}
        />
    </div>
    <ul className=" grid grid-four--cols">
    {moviesData.Search.map((curMovie) => {
      return <Card key={curMovie.imdbID} curMovie = {curMovie}/>;
    })}
    </ul>
    </>
  )
}

export default Movie
