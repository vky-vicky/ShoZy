import React from 'react';
import './Login.css'; 
import loginImage from './Assets/file.png'; 

export const Login = () => {
  return (
    <main className="login-main" id='login'>
      <div className="image-container">
        <img src={loginImage} alt="Login" className="login-image" />
      </div>
      <div className="login-container">
        <h2 className="login-title">Welcome Back!</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" required />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="register-link">
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </div>
    </main>
  );
};

export default Login;
