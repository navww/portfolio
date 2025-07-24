import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faMapMarkerAlt, 
  faPaperPlane,
  faCheckCircle,
  faCode,
  faArrowRight,
  faExclamationCircle,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  // Initialize EmailJS with your public key
  useEffect(() => {
    emailjs.init("YOUR_EMAILJS_PUBLIC_KEY"); // You'll need to replace this with your actual EmailJS public key
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    
    // Prepare template parameters
    const templateParams = {
      to_email: 'naveentripathi.career@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || 'Message from Portfolio Contact Form',
      message: formData.message
    };
    
    // Send email using EmailJS
    emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      templateParams,
      'YOUR_USER_ID' // Replace with your EmailJS user ID
    )
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      setError('Failed to send message. Please try again later.');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Feel free to reach out to me for any questions or opportunities. I'll get back to you as soon as possible!</p>
        </div>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <a href="mailto:naveentripathi.career@gmail.com">naveentripathi.career@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>Delhi, India</p>
                </div>
              </div>
              
              <div className="contact-social">
                <h4>Follow Me</h4>
                <div className="social-links">
                  <a 
                    href="https://www.linkedin.com/in/naveen-tripathi-826773209/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a 
                    href="https://github.com/navww" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a 
                    href="https://leetcode.com/u/coderr212/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LeetCode"
                    title="LeetCode"
                  >
                    <FontAwesomeIcon icon={faCode} />
                  </a>
                  <a 
                    href="https://www.geeksforgeeks.org/user/coder405/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="GeeksforGeeks"
                    title="GeeksforGeeks"
                  >
                    <i className="fab fa-gg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h3>Send me a message</h3>
            
            {isSubmitted ? (
              <div className="form-success">
                <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
                <div>
                  <h4>Message Sent Successfully!</h4>
                  <p>Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                {error && (
                  <div className="form-error">
                    <FontAwesomeIcon icon={faExclamationCircle} style={{ marginRight: '8px' }} />
                    {error}
                  </div>
                )}
                
                <div className="form-group">
                  <label htmlFor="name">Name <span className="required">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email <span className="required">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message <span className="required">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows="5"
                    required
                  ></textarea>
                </div>
                
                <div className="form-actions">
                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    <FontAwesomeIcon icon={isSubmitting ? faSpinner : faPaperPlane} className="btn-icon" spin={isSubmitting} />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '8px' }} />}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
