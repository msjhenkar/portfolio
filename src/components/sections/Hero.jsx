import React from 'react'
import "../../styles/Hero.css"
import TechCircle from '../TechCircle'

import Particles from '../../reactBits/Particlesbackground'

const Hero = () => {
    return (
        <section className='hero'>
            <div className="glow"></div>
            

            <div className="hero-content">
                <span className="badge">Full stack developer</span>

                <h1>
                    Building scalable <span className="gradient-text">full-stack</span>
                    <br />
                    applications with clean architecture
                </h1>

                <p>
                    Full Stack Developer specializing in modern web technologies.
                    Passionate about building efficient, scalable, and user-focused applications.
                </p>


                <div className="button-group">
                    <button className="hero-btn">View Projects</button>
                    <button className="hero-btn-outline">Download Resume</button>
                </div>

            </div>

            <div className="hero-visual">
                <TechCircle />
            </div>
            
        </section>
    )
}

export default Hero
