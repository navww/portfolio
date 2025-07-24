import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeart, 
  faEnvelope, 
  faMapMarkerAlt,
  faArrowUp,
  faCode
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGithub, 
  faLinkedin,
  faHackerrank
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScroll, setShowScroll] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Check scroll position to show/hide back to top button
  useEffect(() => {
    const checkScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    // Initial check
    checkScroll();
    
    // Add scroll event listener with passive for better performance
    window.addEventListener('scroll', checkScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', checkScroll, { passive: true });
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Navigation items with smooth scroll
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <h3>Naveen Tripathi</h3>
            <p>Full Stack Developer passionate about creating exceptional digital experiences with modern technologies.</p>
            
            <div className="footer-contact-info">
              <div className="contact-item">
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                <a href="mailto:naveentripathi.career@gmail.com">naveentripathi.career@gmail.com</a>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
                <span>Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link 
                    to={item.id} 
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact="true" 
                    offset={-80}
                    className="nav-link"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4>Connect With Me</h4>
            <p>Feel free to reach out for collaborations or just a friendly hello!</p>
            
            <div className="footer-social">
              <a 
                href="https://www.linkedin.com/in/naveen-tripathi-826773209/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="social-link"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a 
                href="https://github.com/navww" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="social-link"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a 
                href="https://leetcode.com/u/coderr212/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LeetCode"
                title="LeetCode"
                className="social-link"
              >
                <FontAwesomeIcon icon={faCode} />
              </a>
              <a 
                href="https://www.hackerrank.com/profile/naveentripathi_" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="HackerRank"
                title="HackerRank"
                className="social-link"
              >
                <FontAwesomeIcon icon={faHackerrank} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Naveen Tripathi. All rights reserved.
            <span className="made-with">
              Crafted with <FontAwesomeIcon icon={faHeart} className="heart-icon" beat={isHovered} /> in India
            </span>
          </p>
        </div>
        
        {/* Back to Top Button */}
        <button 
          className={`back-to-top ${showScroll ? 'visible' : ''}`} 
          onClick={scrollToTop}
          aria-label="Back to top"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ display: 'flex' }} // Ensure flex display for icon centering
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
