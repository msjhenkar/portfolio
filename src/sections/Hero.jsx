import React, { forwardRef } from 'react'
import "../styles/Hero.css"
// import TechCircle from '../components/TechCircle'
import { FaFilePdf, FaGithub, FaLinkedin, FaFileAlt, FaFileWord } from 'react-icons/fa'


const Hero = forwardRef(({ projectRef }, ref) => {
    const scrollToSection = (sectionRef) => {
        if (sectionRef && sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className='hero' ref={ref}>
            <div className="glow"></div>

            <div className="hero-content">
                {/* <span className="badge">Developer</span> */}

                <h1 className="hero-title">
                    Hey, I'm <span className="gradient-text">Jhenkar MS</span>
                </h1>

                <h2 className="hero-subtitle">Aspiring Software Engineer</h2>
                <p className="hero-description">
                    Building backend and full-stack applications while looking for opportunities to start my career in software engineering.
                </p>

                <div className="button-group">
                    <button className="hero-btn" onClick={() => scrollToSection(projectRef)}>
                        View Projects
                    </button>
                    <button className="hero-btn-outline" onClick={() => window.open("/resume.pdf", "_blank", "noopener,noreferrer")}>
                        View Resume
                    </button>
                </div>

                <div className="skills-strip">
                    <span className="skill-badge">Java</span>
                    <span className="skill-badge">Spring Boot</span>
                    <span className="skill-badge">React</span>
                    <span className="skill-badge">SQL</span>
                    <span className="skill-badge">PostgreSQL</span>
                    <span className="skill-badge">Git</span>
                </div>

                <div className='nav-btn-container'>
                    <a
                        href="https://github.com/msjhenkar"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="nav-icon" />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/ms-jhenkar/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className="nav-icon" />
                    </a>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFileAlt className="nav-icon" />
                    </a>
                </div>

            </div>

            <div className="scroll-indicator" onClick={() => scrollToSection(projectRef)}>
                <span className="scroll-text">Explore my work</span>
                <span className="scroll-arrow">↓</span>
            </div>

            {/* <div className="hero-visual">
                <TechCircle />
            </div> */}

        </section>
    )
})

export default Hero
