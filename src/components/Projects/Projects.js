import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faExternalLinkAlt, 
  faLaptopCode, 
  faCode,
  faArrowRight,
  faServer,
  faMobileAlt
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Projects.css';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Bid.ai',
      description: 'An OLX prototype built with MERN stack featuring product listings with CRUD operations and user authentication.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
      demoLink: 'https://www.bidai.in/',
      githubLink: '#',
      category: 'web',
      icon: faLaptopCode,
      features: [
        'Developed an OLX prototype using MERN stack, implementing CRUD operations for product listings in PostgreSQL',
        'Achieved sub-200ms query response times through optimized indexing',
        'Engineered a responsive frontend with React.js and Tailwind CSS',
        'Integrated RESTful APIs with JWT authentication and input validation'
      ]
    },
    {
      id: 2,
      title: 'Messaging Application',
      description: 'A real-time messaging platform with authentication and emoji support.',
      technologies: ['React', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'WebSocket'],
      demoLink: 'https://messengerapp-seven.vercel.app/login',
      githubLink: '#',
      category: 'web',
      icon: faMobileAlt,
      features: [
        'Built a real-time messaging platform with authentication and emoji support',
        'Developed backend APIs with Node.js/Express.js and MongoDB',
        'Optimized with aggregation pipelines for 150ms response times',
        'Designed responsive UI with AntD and implemented WebSocket for real-time messaging'
      ]
    },
    {
      id: 3,
      title: 'E-commerce API',
      description: 'A robust e-commerce backend API with product management and order processing.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Redis', 'JWT'],
      githubLink: '#',
      category: 'backend',
      icon: faServer,
      features: [
        'Built scalable RESTful APIs for e-commerce operations',
        'Implemented JWT authentication and role-based access control',
        'Optimized database queries with Redis caching',
        'Integrated payment gateway and order processing system'
      ]
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects and skills.',
      technologies: ['React', 'CSS3', 'JavaScript', 'Responsive Design'],
      demoLink: '#',
      githubLink: '#',
      category: 'web',
      icon: faCode,
      features: [
        'Designed and developed a responsive portfolio website',
        'Implemented smooth animations and transitions',
        'Optimized for performance and SEO',
        'Integrated with GitHub API to showcase repositories'
      ]
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2>My Projects</h2>
          <p>Some of my recent works</p>
        </div>

        <div className="projects-filter">
          <button 
            className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${activeTab === 'web' ? 'active' : ''}`}
            onClick={() => setActiveTab('web')}
          >
            Web Applications
          </button>
          <button 
            className={`filter-btn ${activeTab === 'backend' ? 'active' : ''}`}
            onClick={() => setActiveTab('backend')}
          >
            Backend Services
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-icon">
                <FontAwesomeIcon icon={project.icon} />
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  <div className="tech-tags">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>
                        <FontAwesomeIcon icon={faArrowRight} className="feature-icon" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-links">
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link demo"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
                    </a>
                  )}
                  
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link code"
                    >
                      <FontAwesomeIcon icon={faGithub} /> View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
