import React from 'react'

const getMovieData = async (movieName) => {

        try {
                const response = await fetch(
                         `https://www.omdbapi.com/?i=tt3896198&apikey=${
        import.meta.env.VITE_API_KEY
      }&s=${movieName}&page=1`
                )

                const data = response.json();
                return data;
        } catch (error) {
                console.log(error);
        }
}

export default getMovieData
