const projects = [
    {
        title: "BrewCafe",
        subtitle: "Cafe Management System",
        category: "Full-Stack Development",
        description: "A full-stack cafe management application supporting Admin, Staff, and Customer workflows.",
        image: "/projects/brewcafe.png",
        techStack: ["Java", "Spring Boot", "React", "MySQL", "JPA/Hibernate"],
        engineeringHighlights: [
            "Built 15+ RESTful APIs using Spring Boot",
            "Implemented role-based authentication and authorization",
            "Designed 8+ normalized MySQL tables using JPA/Hibernate",
            "Implemented pagination and sorting"
        ],
        github: "https://github.com/msjhenkar/BrewDesk",
        isPrimary: true
    },
    {
        title: "Job Tracker",
        subtitle: "Application Tracking Platform",
        category: "Full-Stack Development",
        description: "A full-stack application designed to organize, track, and manage job applications and interview stages efficiently.",
        image: "/projects/job-tracker.png",
        techStack: ["Java", "Spring Boot", "React", "MySQL", "REST APIs"],
        engineeringHighlights: [
            "Designed relational schema for tracking applications",
            "Built CRUD operations for jobs, stages, and contacts",
            "Integrated status dashboard with tracking stats",
            "Implemented custom RESTful endpoints with Spring Boot"
        ],
        github: "https://github.com/msjhenkar/application-tracker"
    },
    {
        title: "WanderLust",
        subtitle: "Travel & Accommodation Platform",
        category: "Backend & Web Development",
        description: "A travel and accommodation platform supporting property listings, authentication, and booking workflows.",
        image: "/projects/wanderlust.png",
        techStack: ["Django", "Django REST Framework", "React", "PostgreSQL", "JWT"],
        engineeringHighlights: [
            "Implemented JWT authentication for user sessions",
            "Built RESTful API views with Django REST Framework",
            "Designed database schema using Django ORM & PostgreSQL",
            "Created dynamic property listing and filtering workflows"
        ],
        github: "https://github.com/msjhenkar/WanderLust"
    },
    {
        title: "Baby Cry Analyzer",
        subtitle: "Emotion Detection & Lullaby Generator",
        category: "Machine Learning & Signal Processing",
        description: "An ML-based application that analyzes baby cries using audio features and generates appropriate lullabies.",
        image: "/projects/baby-cry-analyzer.png",
        techStack: ["Python", "TensorFlow", "Librosa", "Machine Learning"],
        engineeringHighlights: [
            "Extracted MFCC audio features using Librosa library",
            "Trained Convolutional Neural Network (CNN) in TensorFlow",
            "Designed rule-based matching system for lullaby player",
            "Optimized model inference time for real-time analysis"
        ],
        github: "https://github.com/msjhenkar/cry_analyzer"
    },
    {
        title: "Portfolio",
        subtitle: "Portfolio Website",
        category: "Frontend Development",
        description: "A full-stack application designed to organize, track, and manage job applications and interview stages efficiently.",
        image: "/projects/portfolio.png",
        techStack: ["React", "CSS", "Framer Motion"],
        engineeringHighlights: [
            "Built responsive layouts with smooth horizontal scrolling",
            "Integrated Framer Motion for premium micro-animations",
            "Implemented dark galaxy-themed styling with custom glow effects",
            "Designed dynamic data-driven project navigation controls"
        ],
        github: "https://github.com/msjhenkar/portfolio"
    }
];

export default projects;