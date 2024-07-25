import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <img src="logo.png" alt="Logo" className="login-logo" />
        </div>
        <div className="login-form">
          <h2>Log in</h2>
          <button className="google-login">Log in with Google</button>
          <div className="or-divider">or</div>
          <form>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Log in</button>
          </form>
          <div className="login-footer">
            <a href="#">Forgot your password?</a>
            <p>
              Don't have a SEMrush account? <a href="#">Sign up</a>
            </p>
            <a href="#">Log in with SAML</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
