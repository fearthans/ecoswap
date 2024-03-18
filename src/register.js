import React from "react"
import styles from "./register.css"
const register = (props) => {
  return (
      <div class="register-container">
        <div class="register-content">
          <div class="register-columns">
            <div class="register-image-column">
              <div class="register-image-wrapper">
                <img src="Logo EcoSwap.png" alt="EcoSwap" class="register-image" />
              </div>
            </div>
            <div class="register-form-column">
              <div class="register-form-wrapper">
                <div class="register-form-content">
                  <form class="register-form">
                    <div class="register-heading">
                      <h1 class="register-title">Register</h1>
                      <p class="register-subtitle">Let's Create your Swap Account!</p>
                    </div>
                    <div class="username-field">
                      <label for="username" class="username-label">Username</label>
                      <input type="text" id="username" name="username" class="username-input" placeholder="Your Username" required/>
                    </div>
                    <div class="email-field">
                      <label for="email" class="email-label">Email</label>
                      <input type="email" id="email" name="email" class="email-input" placeholder="Your Email Address" required/>
                    </div>
                    <div class="location-field">
                      <label for="location" class="location-label">Location</label>
                      <select id="location" name="location" class="location-select" required>
                        <option value="" disabled selected class="location-option">Select your location</option>
                        <option value="indonesia" class="location-option">Indonesia</option>
                        <option value="united-states" class="location-option">United States</option>
                        <option value="united-kingdom" class="location-option">United Kingdom</option>
                        <option value="australia" class="location-option">Australia</option>
                      </select>
                    </div>
                    <div class="password-field">
                      <label for="password" class="password-label">Password</label>
                      <input type="password" id="password" name="password" class="password-input" placeholder="Your Password" required/>
                    </div>
                    <button type="submit" class="signup-button">Sign Up</button>
                    <div class="divider"></div>
                    <div class="google-signup">
                      <div class="google-signup-content">
                        <img src="google.png" alt="Google icon" class="google-icon" />
                        <span class="google-signup-text">Continue with Google</span>
                      </div>
                    </div>
                    <div class="facebook-signup">
                      <div class="facebook-signup-content">
                        <img src="facebook.png" alt="Facebook icon" class="facebook-icon" />
                        <span class="facebook-signup-text">Continue with Facebook</span>
                      </div>
                    </div>
                    <div class="login-link">
                      Already have an account? <a href="/login" class="login-link-text">Log In</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
export default register