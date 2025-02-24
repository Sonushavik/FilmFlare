import React from 'react'
import { NavLink } from 'react-router';

const Header = () => {
        const getNavLinkStyle = ({ isActive }) => {
                return {
                  color: isActive ? "green" : "black",
                };
              };
  return (
    <>
      <header className="section-navbar">
        <div className="container">
        <section className="top_txt">
          <div className="head container">
            <div className="sing_in_up">
              <NavLink to="# ">SIGN IN</NavLink>
              <NavLink to="# ">SIGN UP</NavLink>
            </div>
          </div>
        </section>
          <nav className="navbar">
            <ul>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  style={getNavLinkStyle}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-link"
                  style={getNavLinkStyle}
                >
                  about
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="movie"
                  className="nav-link"
                  style={getNavLinkStyle} 
                >
                  movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="contact"
                  className="nav-link"
                  style={getNavLinkStyle}
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
