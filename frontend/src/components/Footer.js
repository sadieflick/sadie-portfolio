import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Sadie Flick</p>
        <div className="social-links">
          <a href="https://github.com/sadieflick" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/sadieflick" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
