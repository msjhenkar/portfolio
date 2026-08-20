import React, { forwardRef, useRef, useState, useEffect } from 'react'
import "../styles/Projects.css"
import ProjectsCard from '../components/ProjectsCard'
import projects from '../data/projectsData'
import { motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.15,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const trackVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }
  }
};

const Projects = forwardRef((props, ref) => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const dragDistance = useRef(0);

  // Scroll to a specific card index
  const scrollToIdx = (idx) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const cards = container.querySelectorAll(".project-card");

    if (!cards[idx]) return;

    const targetCard = cards[idx];

    container.scrollTo({
      left: targetCard.offsetLeft,
      behavior: "smooth"
    });

    setActiveIndex(idx);
  };

  const scrollPrev = () => {
    const nextIdx = Math.max(0, activeIndex - 1);
    scrollToIdx(nextIdx);
  };

  const scrollNext = () => {
    const nextIdx = Math.min(projects.length - 1, activeIndex + 1);
    scrollToIdx(nextIdx);
  };

  // Sync active index based on container scroll position
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let timeoutId;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      // Debounce scroll index calculation for performance
      timeoutId = setTimeout(() => {
        const cards = container.querySelectorAll('.project-card');
        if (cards.length === 0) return;

        // Find the card whose offsetLeft is closest to container.scrollLeft
        let closestIndex = 0;
        let minDiff = Infinity;
        cards.forEach((card, index) => {
          const diff = Math.abs(card.offsetLeft - container.scrollLeft);
          if (diff < minDiff) {
            minDiff = diff;
            closestIndex = index;
          }
        });

        if (closestIndex !== activeIndex) {
          setActiveIndex(closestIndex);
        }
      }, 50);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      container.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [activeIndex]);

  // Translate mouse wheel input (vertical to horizontal scroll) on desktop
  const handleWheel = (e) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const isScrollable = container.scrollWidth > container.clientWidth;
    if (!isScrollable) return;

    const isAtStart = container.scrollLeft === 0;
    const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10;

    if (e.deltaY !== 0) {
      // If we can scroll horizontally in the scrolled direction, translate the scroll
      if ((e.deltaY < 0 && !isAtStart) || (e.deltaY > 0 && !isAtEnd)) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    }
  };

  // Mouse Drag interaction
  const handleMouseDown = (e) => {
    if (e.button !== 0) return; // Only drag on left click
    if (!containerRef.current) return;

    setIsDragging(true);
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
    containerRef.current.style.scrollBehavior = 'auto'; // Disable transitions during drag
    containerRef.current.style.cursor = 'grabbing';
    dragDistance.current = 0;
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Drag speed multiplier
    containerRef.current.scrollLeft = scrollLeft.current - walk;
    dragDistance.current = Math.abs(walk);
  };

  const handleMouseUp = () => {
    if (!isDragging || !containerRef.current) return;
    setIsDragging(false);

    const container = containerRef.current;
    container.style.scrollBehavior = 'smooth';
    container.style.cursor = 'grab';

    // Snap to closest project card
    const cards = container.querySelectorAll('.project-card');
    if (cards.length === 0) return;

    let closestIndex = 0;
    let minDiff = Infinity;
    cards.forEach((card, index) => {
      const diff = Math.abs(card.offsetLeft - container.scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = index;
      }
    });

    const targetCard = cards[closestIndex];
    if (targetCard) {
      container.scrollTo({
        left: targetCard.offsetLeft,
        behavior: 'smooth'
      });
      setActiveIndex(closestIndex);
    }
  };

  // Prevent link/button click if user dragged the track
  const handleCaptureClick = (e) => {
    if (dragDistance.current > 10) {
      e.stopPropagation();
      e.preventDefault();
    }
  };

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="projects"
      id="projects"
    >
      {/* Section Header */}
      <motion.div className="projects-header" variants={headerVariants}>
        {/* <span className="projects-badge">SELECTED WORK</span> */}
        <h2 className="projects-title">
          <span className="gradient-text">Projects</span>
        </h2>
        <div className="projects-divider" />
        <p className="projects-description">
          A collection of projects I've built while learning, experimenting, and solving real problems.
        </p>
      </motion.div>

      {/* Projects Track Container */}
      <motion.div
        className="projects-gallery-wrapper"
        variants={trackVariants}
      >
        <div
          ref={containerRef}
          className="projects-container"
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onClickCapture={handleCaptureClick}
          style={{ cursor: 'grab' }}
          role="region"
          aria-label="Project portfolio track"
        >
          {projects.map((project, index) => (
            <ProjectsCard
              key={index}
              number={index + 1 < 10 ? `0${index + 1}` : `${index + 1}`}
              {...project}
            />
          ))}
        </div>

        {/* Gallery Navigation Controls */}
        <div className="projects-controls">
          <button
            className="nav-arrow-btn"
            onClick={scrollPrev}
            disabled={activeIndex === 0}
            aria-label="Previous project"
          >
            <FiChevronLeft size={24} />
          </button>

          <div className="projects-indicator-container">
            <span className="projects-page-number">
              {activeIndex + 1 < 10 ? `0${activeIndex + 1}` : activeIndex + 1} / {projects.length < 10 ? `0${projects.length}` : projects.length}
            </span>
            <div className="projects-progress-track" role="tablist">
              {projects.map((_, index) => (
                <React.Fragment key={index}>
                  <button
                    className={`projects-progress-dot ${index === activeIndex ? 'active' : ''}`}
                    onClick={() => scrollToIdx(index)}
                    role="tab"
                    aria-selected={index === activeIndex}
                    aria-label={`Go to project ${index + 1}`}
                  />
                  {index < projects.length - 1 && (
                    <span className="projects-progress-dot-line" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <button
            className="nav-arrow-btn"
            onClick={scrollNext}
            disabled={activeIndex === projects.length - 1}
            aria-label="Next project"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </motion.div>
    </motion.section>
  )
})

Projects.displayName = 'Projects';

export default Projects;