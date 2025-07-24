import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faServer, 
  faDatabase, 
  faTools,
  faLaptopCode,
  faMobileAlt
} from '@fortawesome/free-solid-svg-icons';
import { 
  faJs, 
  faReact, 
  faNodeJs, 
  faHtml5, 
  faCss3Alt, 
  faBootstrap,
  faGithub,
  faJava,
  faAws,
  faDocker,
  faNpm,
  faGitAlt
} from '@fortawesome/free-brands-svg-icons';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      id: 1,
      category: 'Frontend Development',
      icon: faLaptopCode,
      items: [
        { name: 'HTML5', icon: faHtml5, level: 90 },
        { name: 'CSS3', icon: faCss3Alt, level: 85 },
        { name: 'JavaScript', icon: faJs, level: 90 },
        { name: 'React.js', icon: faReact, level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Bootstrap', icon: faBootstrap, level: 80 },
        { name: 'Responsive Design', icon: faMobileAlt, level: 90 }
      ]
    },
    {
      id: 2,
      category: 'Backend & Databases',
      icon: faServer,
      items: [
        { name: 'Node.js', icon: faNodeJs, level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'RESTful APIs', icon: faCode, level: 85 },
        { name: 'MongoDB', icon: faDatabase, level: 80 },
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Java', icon: faJava, level: 75 },
        { name: 'C++', level: 70 }
      ]
    },
    {
      id: 3,
      category: 'Tools & Platforms',
      icon: faTools,
      items: [
        { name: 'Git', icon: faGitAlt, level: 85 },
        { name: 'GitHub', icon: faGithub, level: 85 },
        { name: 'Docker', icon: faDocker, level: 70 },
        { name: 'AWS', icon: faAws, level: 65 },
        { name: 'VS Code', level: 90 },
        { name: 'Postman', level: 85 },
        { name: 'NPM', icon: faNpm, level: 80 },
        { name: 'Agile/Scrum', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2>My Skills</h2>
          <p>What I Know</p>
        </div>
        
        <div className="skills-container">
          {skills.map((skill) => (
            <div key={skill.id} className="skill-category">
              <div className="skill-category-header">
                <div className="skill-category-icon">
                  <FontAwesomeIcon icon={skill.icon} />
                </div>
                <h3>{skill.category}</h3>
              </div>
              <div className="skill-items">
                {skill.items.map((item, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <div className="skill-name">
                        {item.icon ? (
                          <FontAwesomeIcon icon={item.icon} className="skill-icon" />
                        ) : (
                          <span className="skill-icon">•</span>
                        )}
                        <span>{item.name}</span>
                      </div>
                      <span className="skill-percent">{item.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${item.level}%` }}
                        data-level={item.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
