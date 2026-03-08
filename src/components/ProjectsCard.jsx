import React from 'react'
import { motion } from "framer-motion"
import { FiGithub, FiExternalLink } from "react-icons/fi"

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
}

const ProjectsCard = ({
  title,
  description,
  image,
  techStack = [],
  github
  // liveDemo
}) => {
  return (

    <motion.div className="project-card"
      variants={cardVariants}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
        <div className="project-overlay"></div>
      </div>

      <div className="project-content">
        <h3 className='project-title'>{title}</h3>
        <p className='project-description'>{description}</p>

        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <span key={index} className='tech-item'>
              {tech}
            </span>
          ))}
        </div>

        <div className="project-links">
          {github && (
            <a href={github} target='_blank' rel='noreferrer' className="project-link-btn">
              <FiGithub /> View Code
            </a>
          )}
          {/* {liveDemo && (
            <a href={liveDemo} target='_blank' rel='noreferrer' className="project-link-btn primary-btn">
              <FiExternalLink /> Live Demo
            </a>
          )} */}
        </div>
      </div>
    </motion.div>

  );
};

export default ProjectsCard
