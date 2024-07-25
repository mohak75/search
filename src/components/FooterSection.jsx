// FooterSection.js
import React from 'react';
import './FooterSection.css';

function FooterSection() {
  return (
    <footer className="footer-section">
      <div className="footer-promo">
        <p>Get 7 days of full access to Semrush today.</p>
        <button>Start your free trial</button>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <h3>SEMRUSH</h3>
          <ul>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Webinars</a></li>
            <li><a href="#">Academy</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>COMMUNITY</h3>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Forum</a></li>
            <li><a href="#">Events</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>MORE TOOLS</h3>
          <ul>
            <li><a href="#">SEO Tools</a></li>
            <li><a href="#">Content Tools</a></li>
            <li><a href="#">Market Research</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>COMPANY</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>FOLLOW US</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo">
          <img src="path_to_logo_image" alt="SEMRUSH Logo" />
        </div>
        <div className="footer-copyright">
          <p>© 2024 SEMRUSH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
