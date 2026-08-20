import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'
import "../styles/skills.css"
import { FaReact, FaJava, FaPython, FaGitAlt, FaGithub, FaDatabase, FaCode, FaJs } from 'react-icons/fa'
import { SiDjango, SiMysql, SiPostgresql, SiSpringboot, SiIntellijidea } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';

const nodes = [
  // Core technologies
  {
    id: "java",
    name: "Java",
    icon: <FaJava />,
    category: "core",
    x: 43,
    y: 47,
    isCore: true
  },
  {
    id: "python",
    name: "Python",
    icon: <FaPython />,
    category: "core",
    x: 57,
    y: 47,
    isCore: true
  },

  // Primary technologies
  {
    id: "react",
    name: "React",
    icon: <FaReact />,
    category: "frontend",
    x: 50,
    y: 19,
    isCore: false
  },
  {
    id: "springboot",
    name: "Spring Boot",
    icon: <SiSpringboot />,
    category: "backend",
    x: 35,
    y: 60,
    isCore: false
  },
  {
    id: "django",
    name: "Django",
    icon: <SiDjango />,
    category: "backend",
    x: 65,
    y: 60,
    isCore: false
  },

  // API / frontend
  {
    id: "javascript",
    name: "JavaScript",
    icon: <FaJs />,
    category: "frontend",
    x: 30,
    y: 29,
    isCore: false
  },
  {
    id: "restapi",
    name: "REST APIs",
    icon: <FaCode />,
    category: "backend",
    x: 70,
    y: 29,
    isCore: false
  },

  // Databases
  {
    id: "postgresql",
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    category: "database",
    x: 37,
    y: 74,
    isCore: false
  },
  {
    id: "mysql",
    name: "MySQL",
    icon: <SiMysql />,
    category: "database",
    x: 63,
    y: 74,
    isCore: false
  },
  {
    id: "sql",
    name: "SQL",
    icon: <FaDatabase />,
    category: "database",
    x: 50,
    y: 83,
    isCore: false
  },

  // Tools
  {
    id: "vscode",
    name: "VS Code",
    icon: <TbBrandVscode />,
    category: "tools",
    x: 28,
    y: 82,
    isCore: false
  },
  {
    id: "intellij",
    name: "IntelliJ IDEA",
    icon: <SiIntellijidea />,
    category: "tools",
    x: 13,
    y: 82,
    isCore: false
  },
  {
    id: "git",
    name: "Git",
    icon: <FaGitAlt />,
    category: "tools",
    x: 69,
    y: 82,
    isCore: false
  },
  {
    id: "github",
    name: "GitHub",
    icon: <FaGithub />,
    category: "tools",
    x: 82,
    y: 82,
    isCore: false
  }
];

const connections = [
  ["react", "javascript"],
  ["react", "restapi"],

  ["javascript", "java"],
  ["restapi", "python"],

  ["java", "python"],

  ["java", "springboot"],
  ["python", "django"],

  ["springboot", "postgresql"],
  ["django", "mysql"],

  ["postgresql", "sql"],
  ["mysql", "sql"],

  ["git", "github"]
];

const nodeVariants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
    x: "-50%",
    y: "-50%"
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: "-50%",
    y: "-50%"
  }
};

const Skills = forwardRef((props, ref) => {
  return (
    <section className="skills-section" id="skills" ref={ref}>
      {/* Background glow matching portfolio aesthetic */}
      <div className="skills-glow" />

      {/* Section Header */}
      <div className="skills-header">
        <span className="skills-badge">TECHNOLOGIES I KNOW</span>
        <h2 className="skills-title">
          Tech <span className="gradient-text">Stack</span>
        </h2>
        <div className="skills-divider" />
        <p className="skills-description">
          Technologies I've used to build backend and full-stack projects.
        </p>
      </div>

      {/* Constellation Container */}
      <div className="constellation-container">
        {/* SVG Connections (hidden on mobile) */}
        <svg className="constellation-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          {connections.map(([fromId, toId], idx) => {
            const fromNode = nodes.find(n => n.id === fromId);
            const toNode = nodes.find(n => n.id === toId);
            if (!fromNode || !toNode) return null;
            return (
              <line
                key={idx}
                x1={`${fromNode.x}%`}
                y1={`${fromNode.y}%`}
                x2={`${toNode.x}%`}
                y2={`${toNode.y}%`}
                className="constellation-line"
              />
            );
          })}
        </svg>

        {/* Constellation Nodes */}
        <motion.div
          className="constellation-nodes-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.05
              }
            }
          }}
        >
          {nodes.map((node) => {


            return (
              <motion.div
                key={node.id}
                className={`tech-node ${node.isCore ? "core-node" : "secondary-node"
                  } ${node.category}-node tech-node-${node.id}`}
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`
                }}
                aria-label={`${node.name} (${node.category})`}
                variants={nodeVariants}
                whileHover={{
                  scale: node.isCore ? 1.12 : 1.08,
                  zIndex: 10
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              >
                {node.isCore && <div className="core-pulse-bg" />}
                <span className="tech-node-icon">{node.icon}</span>
                <span className="tech-node-name">{node.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  )
})

export default Skills
