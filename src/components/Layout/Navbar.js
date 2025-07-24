import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Toggle mobile menu
  const toggleMenu = () => {
    document.body.style.overflow = !isOpen ? 'hidden' : '';
    setIsOpen(!isOpen);
  };

  // Close mobile menu when clicking a link
  const closeMenu = () => {
    document.body.style.overflow = '';
    setIsOpen(false);
  };

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Handle window resize
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      
      // Close menu when resizing to desktop
      if (!mobile && isOpen) {
        closeMenu();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = ''; // Reset body overflow on unmount
    };
  }, [isOpen]);

  // Close menu when clicking outside or on a link
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('.nav-menu') && !e.target.closest('.menu-icon')) {
        closeMenu();
      }
    };

    // Handle escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, []);

  // Navigation links data
  const navLinks = [
    { to: 'home', text: 'Home' },
    { to: 'about', text: 'About' },
    { to: 'skills', text: 'Skills' },
    { to: 'education', text: 'Education' },
    { to: 'projects', text: 'Projects' },
    { to: 'experience', text: 'Experience' },
    { to: 'contact', text: 'Contact' },
  ];

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <Link 
            to="home" 
            smooth={true} 
            duration={500} 
            className="logo" 
            onClick={closeMenu}
            aria-label="Home"
          >
            <span className="logo-text">Naveen</span>
          </Link>

          {/* Mobile menu button */}
          <button 
            className="menu-icon" 
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="main-navigation"
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>

          {/* Mobile menu overlay */}
          {isMobile && (
            <div 
              className={`mobile-overlay ${isOpen ? 'active' : ''}`} 
              onClick={closeMenu}
              role="presentation"
            />
          )}

          {/* Navigation Menu */}
          <nav 
            className={`nav-menu ${isOpen ? 'active' : ''}`} 
            id="main-navigation"
            role="navigation"
            aria-label="Main navigation"
          >
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.to}>
                  <Link 
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="nav-link"
                    onClick={closeMenu}
                    tabIndex={isMobile && !isOpen ? -1 : 0}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      
      {/* Add padding to prevent content from being hidden behind fixed header */}
      <div style={{ height: scrolled ? '70px' : '90px' }} />
    </>
  );
};

export default Navbar;
