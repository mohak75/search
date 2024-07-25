import React from 'react';
import './SignUp.css';

const SignUp = () => {
  return (
    <div className="signup-page">
      <div className="signup-container">
        <img src="/path-to-sem-rush-logo.png" alt="SEMRUSH Logo" className="signup-logo" />
        <h1>Create your account</h1>
        <button className="google-button">Continue with Google</button>
        <div className="or-divider">
          <span>or</span>
        </div>
        <form className="signup-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="signup-button">Create account</button>
        </form>
        <p className="terms">
          By creating your account, you agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
        </p>
        <p className="login-link">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
