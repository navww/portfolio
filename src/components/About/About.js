import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faCode, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p>Get to know me</p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <div className="image-container">
              <img 
                src={require('../../assets/profile1.jpg')} 
                alt="Naveen Tripathi" 
                className="profile-image"
              />
            </div>
          </div>

          <div className="about-details">
            <h3>Who am I?</h3>
            <p>
              I'm a passionate Full Stack Developer with expertise in building modern web applications. 
              I love turning complex problems into simple, beautiful, and intuitive solutions. With a 
              strong foundation in both front-end and back-end development, I bring ideas to life 
              through clean, efficient, and maintainable code.
            </p>

            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">Name:</span>
                <span className="info-value">Naveen Tripathi</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <a href="mailto:naveentripathi.career@gmail.com" className="info-value">naveentripathi.career@gmail.com</a>
              </div>
              <div className="info-item">
                <span className="info-label">Experience:</span>
                <span className="info-value">2+ Years</span>
              </div>
              <div className="info-item">
                <span className="info-label">Phone:</span>
                <a href="tel:+916392673170" className="info-value">+91 6392 673 170</a>
              </div>
              <div className="info-item">
                <span className="info-label">Freelance:</span>
                <span className="info-value available">Available</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location:</span>
                <span className="info-value">Lucknow, India</span>
              </div>
            </div>

            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">
                  <FontAwesomeIcon icon={faUserTie} />
                </div>
                <div className="feature-content">
                  <h4>Professional</h4>
                  <p>Clean and professional development approach</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <FontAwesomeIcon icon={faCode} />
                </div>
                <div className="feature-content">
                  <h4>Development</h4>
                  <p>Full-stack development expertise</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </div>
                <div className="feature-content">
                  <h4>Learning</h4>
                  <p>Continuously learning new technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
