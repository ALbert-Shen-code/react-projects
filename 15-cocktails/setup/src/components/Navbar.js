import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <nav className="navebar">
      <div className="nav-center">
        <Link to="/">
        <img src={logo} alt="cocktail logo"  className="logo"></img>
        </Link>
        <ul className="nav-links">
          <li><Link to="/">
          Home
          </Link></li>
          <li>
            <Link to="/about"> 
            About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
