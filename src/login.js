import React from "react";
import "./App.css";
import styles from "./menu.css"; 
import { Link } from 'react-router-dom';
const login = (props) => {
  return (
      <div class="login-container">
        <div class="login-wrapper">
          <div class="login-content">
            <div class="login-columns">
              <div class="login-column">
                <div class="login-form-container">
                  <div class="login-form-wrapper">
                    <form class="login-form">
                      <div class="login-heading">
                        <h1 class="login-title">Login</h1>
                        <p class="login-subtitle">Login to your Swap Account !</p>
                      </div>
                      <div class="login-email-container">
                        <label htmlFor="email" class="login-email-label">
                          Email/Username
                        </label>
                        <input
                          type="text"
                          id="email"
                          name="email"
                          class="login-email-input"
                          placeholder="Your Email Address/Username"
                          aria-label="Your Email Address/Username"
                        />
                      </div>
                      <div class="login-password-container">
                        <label htmlFor="password" class="login-password-label">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          class="login-password-input"
                          placeholder="Your Password"
                          aria-label="Your Password"
                        />
                        <span class="login-password-hint">-</span>
                      </div>
                      <button type="submit" class="login-button">
                        Login
                      </button>
                      <a href="#" class="forgot-password-link">
                        Forgot your password?{" "}
                        <span style={{ fontWeight: 700 }}>Get Help</span>
                      </a>
                      <div class="login-divider"></div>
                      <button type="button" class="google-login-button">
                        <div class="google-login-content">
                          <img src="google.png" alt="Google icon" class="google-icon" />
                          <span class="google-login-text">Continue with Google</span>
                        </div>
                      </button>
                      <button type="button" class="facebook-login-button">
                        <div class="facebook-login-content">
                          <img
                            src="facebook.png"
                            alt="Facebook icon"
                            class="facebook-icon"
                          />
                          <span class="facebook-login-text">
                            Continue with Facebook
                          </span>
                        </div>
                      </button>
                      <Link to="/register" className="register-link">
              Doesn't have an account? <span style={{ fontWeight: 700 }}>Register Now</span>
            </Link>
                    </form>
                  </div>
                </div>
              </div>
              <div class="image-column">
                <div class="image-container">
                  <img
                    src="Logo EcoSwap.png"
                    alt="Login illustration"
                    class="login-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
)
}

export default login;