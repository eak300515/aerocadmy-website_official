import React from 'react';
import './Footer.css';
import logo from '/logo2.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo} alt="Aerocadmy Logo" className="footer-logo-img" />
          <p>Inspiring the next generation of drone innovators.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#faq">FAQs</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: support@aerocadmy.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} aerocadmy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
