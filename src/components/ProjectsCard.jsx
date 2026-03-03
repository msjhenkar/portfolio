import React from 'react'
import {motion} from "framer-motion"


const cardVariants = {
  hidden: { opacity: 0, y: 45, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}
const ProjectsCard = ({
        title, 
        description, 
        techStack = [], 
        features = [],
        github,
}) => {
  return (
    
      <motion.div className="project-card" 
      variants = {cardVariants}
      >
        <h3 className='project-title'>{title}</h3>
        <p className='project-description'>{description}</p>

        <div className="tech-stack">
            {techStack.map((tech,index) => (
                <span key={index} className='tech-item'> 
                    {tech} 
                </span>
            ))}
        </div>

        <ul className='features'>
            {features.map((feature, index) => (
                <li key={index} > {feature} </li>
            ))}
        </ul>

        <div className="project-button">
            {github && (
                <a href= {null} target='_blank' rel='noreferrer'>GitHub</a>
            )}
        </div>

      </motion.div>
    
  );
};

export default ProjectsCard
