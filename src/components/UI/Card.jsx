import React from 'react'
import { NavLink } from 'react-router';
import "./Card.css"
const Card = ({curMovie}) => {
        const { Poster, imdbID } = curMovie;
        // console.log(curMovie);
  return (
        <li className="hero-container">
        <div className="main-container">
          <div className="poster-container">
            <img src={Poster !== "N/A" ? Poster : "./public/image1.jpg"} className="poster" alt={imdbID} style={{ width: "125px", height: "auto", objectFit: "cover" }} />
          </div>
          <div className="ticket-container">
            <div className="ticket__content">
              <NavLink to={`/movie/${imdbID}`}>
                <button className="ticket__buy-btn">Watch now</button> 
              </NavLink>
            </div>
          </div>
        </div>
      </li>
  )
}

export default Card
