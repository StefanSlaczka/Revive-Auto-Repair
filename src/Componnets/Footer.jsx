import React from 'react';
import "../Style/Footer.css"
function Footer() {
  return (
    <footer className="Footer">
      <div className="footer-content">
        <p>&copy; 2024 Your Dealership Name. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
