import React, { forwardRef } from 'react'
import '../styles/About.css'

const About = forwardRef((props, ref) => {
    const technologies = [
        'Java',
        'Spring Boot',
        'React',
        'SQL',
        'PostgreSQL',
        'Git',
        'Python',
        'Django',
        'REST APIs'
    ];

    return (
        <section className="about-section" id="about" ref={ref}>
            {/* Background glows matching the Hero style */}
            <div className="about-glow about-glow-left" />
            <div className="about-glow about-glow-right" />

            {/* Section Header */}
            <div className="about-header">
                <span className="about-badge">MY JOURNEY</span>
                <h2 className="about-title">
                    Building Toward a Career in <span className="gradient-text"> Software Engineering</span>
                </h2>
                <div className="about-divider" />
            </div>

            {/* Main Content Layout */}
            <div className="about-content">
                {/* Left Column: Intro & Status */}
                <div className="about-col-left">
                    <div className="about-intro">
                        <p>
                            I'm a 2025 Information Science graduate with a strong interest in backend and full-stack development. I've built applications using Java, Spring Boot, Python, Django, React, SQL, and PostgreSQL, with a focus on REST APIs, authentication, database design, and clean application architecture.
                        </p>
                        <p>
                            I've gained hands-on experience personal projects, where I've worked on real-world problems and developed practical software engineering skills.
                        </p>
                        <p>
                            I'm currently looking for an entry-level Software Engineer, Java Developer, Backend Developer, or Full-Stack Developer opportunity where I can contribute to a team, learn from experienced engineers, and grow into a strong software developer.
                        </p>
                    </div>

                    <div className="about-availability">
                        <span className="about-status-dot" />
                        <span className="about-status-text">Open to Opportunities</span>
                    </div>
                </div>

                {/* Right Column: Education & Technologies */}
                <div className="about-col-right">
                    {/* Education Block */}
                    <div className="about-segment">
                        <h3 className="about-segment-title">EDUCATION</h3>
                        <div className="about-education-info">
                            <h4 className="about-degree">B.Tech — Information Science & Engineering</h4>
                            <p className="about-edu-detail">2025 Graduate</p>
                            <p className="about-edu-detail font-medium">CGPA: 7.89</p>
                        </div>
                    </div>

                    {/* Technologies Block */}
                    <div className="about-segment">
                        <h3 className="about-segment-title">TECHNOLOGIES</h3>
                        <div className="about-tech-list">
                            {technologies.map((tech) => (
                                <span className="about-tech-badge" key={tech}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})

export default About
