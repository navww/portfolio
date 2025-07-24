import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCalendarAlt, faMapMarkerAlt, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: 'B.Tech in Computer Science',
      institution: 'University Institute of Engineering and Technology',
      location: 'Kanpur, India',
      duration: '2020 - 2024',
      description: [
        'Data Structures and Algorithms',
        'Object-Oriented Programming',
        'Database Management Systems',
        'Operating Systems',
        'Computer Networks',
        'Software Engineering',
        'Machine Learning Basics',
        'Web Development'
      ],
      gpa: '8.5/10',
      icon: faGraduationCap
    },
    {
      id: 2,
      degree: 'Class XII (Senior Secondary)',
      institution: 'Kendriya Vidyalaya No.1',
      location: 'Kanpur, India',
      duration: '2018 - 2019',
      description: [
        'Physics',
        'Chemistry',
        'Mathematics',
        'Computer Science',
        'English',
        'Physical Education'
      ],
      gpa: '85%',
      icon: faBookOpen
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-header">
          <h2>My Education</h2>
          <p>My Academic Journey</p>
        </div>
        
        <div className="education-container">
          {educationData.map((edu) => (
            <div key={edu.id} className="education-card">
              <div className="education-icon">
                <FontAwesomeIcon icon={edu.icon} />
              </div>
              <div className="education-content">
                <div className="education-header">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <span className="education-duration">
                    <FontAwesomeIcon icon={faCalendarAlt} className="meta-icon" />
                    {edu.duration}
                  </span>
                </div>
                
                <div className="education-meta">
                  <span className="meta-item">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="meta-icon" />
                    {edu.institution}
                  </span>
                  {edu.gpa && (
                    <span className="education-gpa">
                      <strong>Score:</strong> {edu.gpa}
                    </span>
                  )}
                </div>
                
                {edu.description && (
                  <div className="education-description">
                    <h4>Key Subjects/Courses:</h4>
                    <ul>
                      {edu.description.map((item, index) => (
                        <li key={index}>
                          <span className="bullet">•</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
