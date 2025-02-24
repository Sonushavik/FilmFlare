import React from 'react'
import { NavLink } from 'react-router'
import Movie from '../../pages/Movie'

const Footer = () => {
  return (
    <footer className="section-footer">
        <div className=" container">
            <NavLink to="/">
                        Home
                      </NavLink>
                      <NavLink to="/about">
                        About
                      </NavLink>

                      <NavLink to="/movie">
                        Movies
                      </NavLink>

                      <NavLink to="/contact">
                        Contact
                      </NavLink>
        </div>
        <p className='Developed-by'>Developed by Sonu.dev</p>
    </footer>
  )
}

export default Footer
