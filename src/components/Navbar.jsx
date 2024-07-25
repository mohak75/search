import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS for Navbar

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="#">SEMRUSH</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="#features">Features</Link></li>
          <li><Link to="#pricing">Pricing</Link></li>
          <li><Link to="#resources">Resources</Link></li>
          <li><Link to="#company">Company</Link></li>
          <li><Link to="/login">Log In</Link></li>
          <li><Link to="/signup" className="signup">Sign Up</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
