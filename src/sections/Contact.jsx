import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'
import '../styles/Contact.css'

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
}

const Contact = forwardRef((props, ref) => {
    const contactLinks = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                </svg>
            ),
            label: 'Email',
            value: 'hello.jhenkarms@gmail.com',
            href: 'mailto:hello.jhenkarms@gmail.com',
            color: '#a855f7',
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
            label: 'LinkedIn',
            value: 'linkedin.com/in/jhenkar',
            href: 'https://linkedin.com/in/jhenkar',
            color: '#4cc9f0',
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
            ),
            label: 'GitHub',
            value: 'github.com/msjhenkar',
            href: 'https://github.com/msjhenkar',
            color: '#e0e0e0',
        },
    ]

    return (
        <motion.section
            className="contact-section"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {/* Background Glows */}
            <div className="contact-glow contact-glow-left" />
            <div className="contact-glow contact-glow-right" />

            {/* Header */}
            <motion.div className="contact-header" variants={itemVariants}>
                <span className="contact-badge">GET IN TOUCH</span>
                <h2 className="contact-title">
                    Let's <span className="gradient-text">Connect</span>
                </h2>
                <div className="contact-divider" />
                <p className="contact-subtitle">
                    I'm currently looking for entry-level software engineering opportunities. If you're hiring for Java, backend, or full-stack roles, I'd be happy to connect.
                </p>
            </motion.div>

            <div className="contact-content">
                {/* Left – Open to Opportunities */}
                <motion.div className="contact-left" variants={itemVariants}>
                    <div className="contact-info-card">
                        <h3 className="contact-info-title">Open to Opportunities</h3>
                        <p className="contact-info-desc">
                            I'm actively seeking opportunities where I can contribute to a development team, work on real-world software, and continue growing as an engineer.
                        </p>

                        {/* Availability badge */}
                        <div className="contact-availability">
                            <span className="contact-status-dot" />
                            <span>Open to Software Engineering Opportunities</span>
                        </div>

                        {/* Social/Contact Links */}
                        <div className="contact-links">
                            {contactLinks.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-link-item"
                                >
                                    <span className="contact-link-icon" style={{ color: item.color }}>
                                        {item.icon}
                                    </span>
                                    <div>
                                        <p className="contact-link-label">{item.label}</p>
                                        <p className="contact-link-value">{item.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Location */}
                        <div className="contact-location">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="location-icon">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <span>Based in Bengaluru, India</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right – CTA Panel */}
                <motion.div className="contact-right" variants={itemVariants}>
                    <div className="contact-cta-card">
                        <h3 className="contact-cta-title">Interested in Connecting?</h3>
                        <p className="contact-cta-desc">
                            Whether you're a recruiter, hiring manager, or fellow developer, feel free to reach out. I'm always open to discussing software engineering opportunities and technical work.
                        </p>

                        <div className="contact-actions">
                            <a
                                href="https://linkedin.com/in/jhenkar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-btn contact-btn-linkedin"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="btn-icon">
                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.67c0-.25.02-.5.1-.68a1.14 1.14 0 0 1 1-.77c.76 0 1 .56 1 1.39v4.73h2.8M7.85 8.56a1.49 1.49 0 1 0 0-2.98 1.49 1.49 0 0 0 0 2.98m1.4 9.94v-8.37h-2.8v8.37h2.8z"/>
                                </svg>
                                Connect on LinkedIn
                            </a>

                            <a
                                href="mailto:hello.jhenkarms@gmail.com"
                                className="contact-btn contact-btn-email"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-icon">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                Send an Email
                            </a>

                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-btn contact-btn-resume"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-icon">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                    <polyline points="14 2 14 8 20 8" />
                                    <line x1="16" y1="13" x2="8" y2="13" />
                                    <line x1="16" y1="17" x2="8" y2="17" />
                                    <polyline points="10 9 9 9 8 9" />
                                </svg>
                                View Resume
                            </a>
                        </div>

                        {/* Subtle Resume CTA */}
                        <div className="contact-subtle-resume">
                            <span className="subtle-text">Looking for my resume?</span>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="subtle-link"
                            >
                                View Resume →
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Footer strip */}
            <div className="contact-footer">
                <p>Designed & Built by <span className="gradient-text">Jhenkar</span> · {new Date().getFullYear()}</p>
            </div>
        </motion.section>
    )
})

Contact.displayName = 'Contact'

export default Contact
