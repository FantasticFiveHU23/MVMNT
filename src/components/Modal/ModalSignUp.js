import React, { Component } from "react";

class ModalSignUp extends Component {
  render() {
    const { handleShowLogin } = this.props;
    
    return (
      <form className="signup-form">
        <div>
          <button className="signup-have-account-prompt" onClick={handleShowLogin}>
            Already have an account?
          </button>
        </div>
        <div>
          <label className="signup-username">Username</label>
          <input type="username" id="username" className="signup-username-input" required />
        </div>
        <div>
          <label className="signup-email">Email</label>
          <input type="email" id="email" className="signup-email-input" required />
        </div>
        <div>
          <label className="signup-password">Password</label>
          <input
            type="password"
            id="password"
            className="signup-password-input"
            required
          />
        </div>
        <div>
          <input className="signup-login" type="submit" value="Sign Up" />
        </div>
        <div>
          <p className="signup-or-login-label">Or</p>
        </div>
        <div>
          <input className="customer-signup" type="checkbox"></input>
          <input className="business-signup" type="checkbox"></input>
        </div>
        <div>
          <button className="signup-social-media-button-google"></button>
          <button className="signup-social-media-button-apple"></button>
          <button className="signup-social-media-button-facebook"></button>
        </div>
      </form>
    );
  }
}

export default ModalSignUp;
