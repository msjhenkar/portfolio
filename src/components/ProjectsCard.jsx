import React, { useState } from 'react'
import { motion } from "framer-motion"
import { FiGithub, FiExternalLink, FiMonitor, FiCode } from "react-icons/fi"

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
}

const ProjectsCard = ({
  number,
  title,
  subtitle,
  category,
  description,
  engineeringHighlights = [],
  image,
  techStack = [],
  github,
  liveDemo,
  isPrimary
}) => {
  const [imageError, setImageError] = useState(false);

  // Choose placeholder icon based on title
  const renderPlaceholderIcon = () => {
    if (title.toLowerCase().includes("analyzer") || title.toLowerCase().includes("cry")) {
      return <FiCode className="placeholder-icon-svg" />;
    }
    return <FiMonitor className="placeholder-icon-svg" />;
  };

  const renderScreenshot = (isMobileView) => {
    if (!image || imageError) {
      return (
        <div className="project-image-placeholder">
          <div className="placeholder-glow-effect"></div>
          <div className="placeholder-inner">
            <div className="placeholder-icon-wrapper">
              {renderPlaceholderIcon()}
            </div>
            <div className="placeholder-details">
              <span className="placeholder-project-title">{title}</span>
              <span className="placeholder-tagline">Project Preview</span>
            </div>
            <div className="placeholder-mockup-elements">
              <div className="mockup-line-long"></div>
              <div className="mockup-line-short"></div>
              <div className="mockup-dots">
                <span className="mockup-dot"></span>
                <span className="mockup-dot"></span>
                <span className="mockup-dot"></span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <motion.img 
        src={image} 
        alt={`${title} screenshot`} 
        className="project-image" 
        onError={() => setImageError(true)}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    );
  };

  return (
    <motion.article 
      className={`project-card ${isPrimary ? 'primary-project' : ''}`}
      variants={cardVariants}
    >
      {/* Large subtle project number background */}
      <span className="project-number-bg" aria-hidden="true">
        {number}
      </span>

      {/* Left Column: Content */}
      <div className="project-card-content">
        <div className="project-card-header-meta">
          <span className="project-number">{number}</span>
          {isPrimary && <span className="featured-badge">Featured Project</span>}
        </div>

        {category && <span className="project-category">{category}</span>}

        <h3 className="project-title">{title}</h3>
        <p className="project-subtitle">{subtitle}</p>
        
        <p className="project-description">{description}</p>

        {/* Engineering Highlights */}
        {engineeringHighlights && engineeringHighlights.length > 0 && (
          <div className="engineering-highlights">
            <h4 className="highlights-title">ENGINEERING HIGHLIGHTS</h4>
            <ul className="highlights-list">
              {engineeringHighlights.slice(0, 4).map((highlight, index) => (
                <li key={index} className="highlight-item">
                  <span className="highlight-bullet">•</span>
                  <span className="highlight-text">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-item">
              {tech}
            </span>
          ))}
        </div>

        {/* Mobile screenshot container (hidden on desktop) */}
        <div className="project-card-image-section mobile-screenshot-section">
          <div className="project-image-container">
            {renderScreenshot(true)}
            {image && !imageError && <div className="project-image-overlay"></div>}
          </div>
        </div>

        <div className="project-links">
          {github && (
            <motion.a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link-btn"
              whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(139, 92, 246, 0.2)" }}
              whileTap={{ scale: 0.98 }}
            >
              <FiGithub /> GitHub &rarr;
            </motion.a>
          )}
          {liveDemo && (
            <motion.a 
              href={liveDemo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link-btn primary-btn"
              whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(96, 165, 250, 0.4)" }}
              whileTap={{ scale: 0.98 }}
            >
              <FiExternalLink /> Live Demo &rarr;
            </motion.a>
          )}
        </div>
      </div>

      {/* Right Column: Screenshot Container (hidden on mobile) */}
      <div className="project-card-image-section desktop-screenshot-section">
        <div className="project-image-container">
          {renderScreenshot(false)}
          {image && !imageError && <div className="project-image-overlay"></div>}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectsCard;
