import React, { forwardRef } from 'react'
import "../styles/Projects.css"
import ProjectsCard from '../components/ProjectsCard'
import projects from '../data/projectsData'
import { motion } from 'framer-motion'
import { MdOpacity } from 'react-icons/md'
import { GiDuration } from 'react-icons/gi'


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Projects = forwardRef((props, ref) => {
  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}

      className='projects'
    >
      {/* section Heading */}
      <motion.div className="projects-header" variants={itemVariants}>
        <h1>Projects</h1>
        <p>Some Things I've Built</p>
      </motion.div>


      <motion.div className="projects-grid" viewport={{ once: true, amount: 0.3 }}>
        {projects.map((project, index) => (
          <ProjectsCard key={index} {...project} />
        ))}

      </motion.div>

    </motion.section>
  )
})

export default Projects