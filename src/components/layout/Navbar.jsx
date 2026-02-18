import React from 'react'
import '../../styles/Navbar.css'
const Navbar = () => {
  return (
    <nav className='navbar'>

      <div className="navbar-container">

        <div className='logo'>Jhenkar MS</div>

        <ul className='nav-links'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <button className="nav-btn">Get Started</button>
      </div>
    </nav>
  )
}

export default Navbar
