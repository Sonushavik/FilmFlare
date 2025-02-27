import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Card from "../components/UI/Card";
import getMovieData from "../api/GetApiData";

const Movie = () => {
  const initialMovies = useLoaderData();
  const [moviesData, setMoviesData] = useState(initialMovies);
  const [movieName, setMovieName] = useState("");

  function searchMoviehandler(event) {
    setMovieName(event.target.value);
  }

  useEffect(() => {
    if (movieName.length > 2) {
      getMovieData(movieName)
        .then((data) => {
          if (data.Search) {
            setMoviesData(data);
          } else {
            setMoviesData({ Search: [] }); 
          }
        })
        .catch((error) => {
          console.error("Error fetching searched movies:", error);
          setMoviesData({ Search: [] });
        });
    } else {
      setMoviesData(initialMovies);
    }
  }, [movieName, initialMovies]);

  return (
    <>
      <div
        className="searchBox"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <input
          type="text"
          id="searchMovie"
          placeholder="Search your favorite movies..."
          value={movieName}
          onChange={searchMoviehandler}
          style={{ width: "60%", margin: "2rem", borderRadius: "10px" }}
        />
      </div>
      
      {moviesData?.Search?.length > 0 ? (
        <ul className="grid grid-four--cols movie-grid">
          {moviesData.Search.map((curMovie) => (
            <Card key={curMovie.imdbID} curMovie={curMovie} />
          ))}
        </ul>
      ) : (
        <p>No movies found</p>
      )}
    </>
  );
};

export default Movie;
