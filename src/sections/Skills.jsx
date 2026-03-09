import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'
import "../styles/skills.css"
import { FaReact, FaHtml5, FaJava, FaPython, FaGitAlt } from 'react-icons/fa'
import { SiDjango, SiMysql, SiPostgresql } from 'react-icons/si';


const skills = [
  { icon: <FaJava />, name: "Java" },
  { icon: <FaPython />, name: "Python" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiPostgresql />, name: "postgreSQL" },
  { icon: <SiDjango />, name: "Django" },
  { icon: <FaGitAlt />, name: "Git" },

]


const Skills = forwardRef((props, ref) => {
  return (
    <>
      <section className="skills-section" ref={ref}>

        <h2 className='skills-title'>Tech Stack</h2>

        <motion.div
          className="skills-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className='skill-card'
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8 }}
            >
              <div className='skill-icon'>{skill.icon}</div>
              <p>{skill.name}</p>
            </motion.div>
          ))}

        </motion.div>

      </section>
    </>

  )
})

export default Skills
