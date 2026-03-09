import React from 'react'
import '../styles/Navbar.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Navbar = ({ homeRef, projectRef, contactRef, aboutRef }) => {

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <nav className='navbar'>

      <div className="navbar-container">

        <div className='logo'>Jhenkar MS</div>

        <ul className='nav-links'>
          <li onClick={() => scrollToSection(homeRef)}>Home</li>
          <li onClick={() => scrollToSection(aboutRef)}>About</li>
          <li onClick={() => scrollToSection(projectRef)}>Projects</li>
          <li onClick={() => scrollToSection(contactRef)}>Contact</li>
        </ul>

        <div className='nav-btn-container'>
          <FaGithub onClick={() => window.open("https://github.com/msjhenkar")} className='nav-icon' />
          <FaLinkedin onClick={() => window.open("https://github.com/msjhenkar")} className='nav-icon' />

        </div>
      </div>
    </nav>
  )
}

export default Navbar
