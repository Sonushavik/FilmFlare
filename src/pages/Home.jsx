import React from 'react'
import { NavLink } from 'react-router'
 
const Home = () => {
  return (
    <main>
    <section className="section-hero">
      <div className="container grid grid-two--cols">
        <div className="section-hero--content">
          <p className="hero-subheading">
            Explore the Latest in Movie Industries
          </p>
          <h1 className="hero-heading">
            Unlimited Movie, TVs Shows, & More.
          </h1>
          <p className="hero-para">
            Discover the Top Best Movies and Dramas with a catchy subtitle
            like Your Ultimate Guide to Must-Watch Content.
          </p>
          <div className="hero-btn">
            <NavLink to="/movie" className="btn">
              Explore Now
            </NavLink>
          </div>
        </div>
        <div className="section-hero-image">
          <img
            src="./movies.png"
            alt="movies poster"
            width="150"
            height="150"
          />
        </div>
      </div>
    </section>
  </main>
  )
}

export default Home
