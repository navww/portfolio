import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarAlt, 
  faMapMarkerAlt,
  faCode,
  faServer,
  faUsers,
  faChartLine
} from '@fortawesome/free-solid-svg-icons';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Full Stack Developer',
      company: 'Chirag Technology',
      location: 'Remote',
      duration: 'Apr 2025 - Present',
      description: [
        'Built 15+ RESTful APIs for frontend state management and backend logic, achieving 99.9% uptime via testing.',
        'Developed a data visualization dashboard using React.js, Chart.js, and PostgreSQL, optimizing queries to reduce analysis time by 10x.',
        'Managed version control with Git/GitHub, implementing branching strategies and conducting pull request reviews, resulting in 20% improved code quality.'
      ],
      icon: faCode,
      achievements: [
        { icon: faServer, text: '99.9% API Uptime' },
        { icon: faChartLine, text: '10x Faster Analysis' },
        { icon: faUsers, text: 'Team Collaboration' }
      ]
    },
    {
      id: 2,
      role: 'Full Stack Developer Intern',
      company: 'MetaGeeks Technologies',
      location: 'Noida, Sector-63',
      duration: 'Dec 2024 - Mar 2025',
      description: [
        'Built responsive user interfaces using React.js with React Router, improving user engagement metrics by 15%.',
        'Engineered scalable backend services with Node.js, Express.js, and integrated MongoDB and MySQL, optimizing API response times by 30%.',
        'Collaborated using Git/GitHub, maintaining clean commit histories and resolving merge conflicts, ensuring zero downtime during production deployments.'
      ],
      icon: faServer,
      achievements: [
        { icon: faChartLine, text: '15% Engagement Boost' },
        { icon: faServer, text: '30% Faster APIs' },
        { icon: faUsers, text: 'Team Collaboration' }
      ]
    },
    {
      id: 3,
      role: 'MERN Stack Developer Trainee',
      company: 'Jspider',
      location: 'Bengaluru',
      duration: 'Apr 2024 - Nov 2024',
      description: [
        'Contributed to full-stack web applications using Node.js, Express.js, and React.js, developing RESTful endpoints and reusable React components.',
        'Debugged and optimized applications, reducing runtime errors by 25% through Jest unit testing and implementing lazy loading.',
        'Adopted Git/GitHub workflows, including feature branching and pull requests, to facilitate collaborative development.'
      ],
      icon: faCode,
      achievements: [
        { icon: faServer, text: '25% Error Reduction' },
        { icon: faChartLine, text: 'Performance Optimization' },
        { icon: faUsers, text: 'Agile Development' }
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <h2>Work Experience</h2>
          <p>My Professional Journey</p>
        </div>
        
        <div className="experience-container">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="experience-card">
              <div className="experience-icon">
                <FontAwesomeIcon icon={exp.icon} />
              </div>
              
              <div className="experience-content">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-role">{exp.role}</h3>
                    <div className="experience-company">{exp.company}</div>
                  </div>
                  <span className="experience-duration">
                    <FontAwesomeIcon icon={faCalendarAlt} className="meta-icon" />
                    {exp.duration}
                  </span>
                </div>
                
                <div className="experience-location">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="meta-icon" />
                  {exp.location}
                </div>
                
                <ul className="experience-description">
                  {exp.description.map((item, i) => (
                    <li key={i}>
                      <span className="bullet">•</span> {item}
                    </li>
                  ))}
                </ul>
                
                <div className="experience-achievements">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="achievement-item">
                      <FontAwesomeIcon icon={achievement.icon} className="achievement-icon" />
                      <span>{achievement.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
