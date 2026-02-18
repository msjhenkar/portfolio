import React from 'react'
import "../../styles/Projects.css"

const Projects = () => {
  return (
    <section className='projects'>

        <div className="projects-bg"></div>

        {/* section Heading */}
        <div className="projects-header">
          <h2>Projects</h2>
          <p>Some Things I've Built</p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          <div className="project-card">Card 1</div>
          <div className="project-card">Card 2</div>
          <div className="project-card">Card 3</div>
          
        </div>
        
        
    </section>
  )
}

export default Projects
