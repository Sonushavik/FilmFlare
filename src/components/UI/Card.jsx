import React from 'react'
import { NavLink } from 'react-router';
import "./Card.css"
const Card = ({curMovie}) => {
        const { Poster, imdbID } = curMovie;
        // console.log(curMovie);
  return (
        <li >
        <div className="card">
          <div className="card-img">
            <img src={Poster !== "N/A" ? Poster : "./public/image1.jpg"} className="poster" alt={imdbID} />
          </div>
            <div className="ticket__content">
              <NavLink to={`/movie/${imdbID}`}>
                <button className="ticket__buy-btn">Watch now</button> 
              </NavLink>
            </div>
          </div>
      </li>
  )
}

export default Card
