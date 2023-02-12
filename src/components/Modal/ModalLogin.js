import React, { Component } from "react";

class ModalLogin extends Component {
  render() {
    const { handleShowSignUp } = this.props;

    return (
      <form className="login-form">
        <div>
          <button className="login-create-account-prompt" onClick={handleShowSignUp}>
            Need an account?
          </button>
        </div>
        <div>
          <label className="login-email">Username/Email</label>
          <input type="email" id="email" className="login-email-input" required />
        </div>
        <div>
          <label className="login-password">Password</label>
          <input
            type="password"
            id="password"
            className="login-password-input"
            required
          />
        </div>
        <div>
          <input className="login-login" type="submit" value="Log In" />
        </div>
        <div>
          <p className="login-or-login-label">Or</p>
        </div>
        <div>
          <button className="login-social-media-button-google"></button>
          <button className="login-social-media-button-apple"></button>
          <button className="login-social-media-button-facebook"></button>
        </div>
      </form>
    );
  }
}

export default ModalLogin;
