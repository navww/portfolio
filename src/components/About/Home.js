import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';
import './Home.css';

const Home = () => {
  // Add animation on component mount
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(element => observer.observe(element));

    return () => {
      elements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="home-content">
          <div className="home-text">
            <h1 className="name">Hi There, I'm Naveen Tripathi</h1>
            <h2 className="title">i am into <span className="typing-text">Full Stack Development</span></h2>
            
            <div className="cta-buttons">
              <Link 
                to="about" 
                smooth={true} 
                duration={500} 
                className="btn btn-primary"
              >
                About Me
              </Link>
              <a 
                href="https://drive.google.com/file/d/1TlYHkQd1zDZqQ5Q5JvQ5Q5Q5Q5Q5Q5Q5/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline"
              >
                Download CV
              </a>
            </div>

            {/* Social Icons */}
            <div className="social-links">
              <a href="https://github.com/naveentripathi03" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/naveentripathi03/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://twitter.com/naveentripathi" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.instagram.com/naveentripathi03/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
          
          <div className="home-image">
            <div className="image-container">
              <img 
                src={require('../../assets/profile1.jpg')} 
                alt="Naveen Tripathi" 
                className="profile-image"
              />
              <div className="tech-stack">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>Express</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-info">
          <div className="contact-item">
            <div className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="details">
              <span>Email</span>
              <a href="mailto:naveentripathi.career@gmail.com">naveentripathi.career@gmail.com</a>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="details">
              <span>Phone</span>
              <a href="tel:+916392673170">+91 6392 673 170</a>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <div className="details">
              <span>Location</span>
              <span>Lucknow, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};




export default Home;
