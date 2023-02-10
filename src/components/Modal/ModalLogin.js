import React, { Component } from "react";

class ModalLogin extends Component {
  render() {
    return (
      <form className="form">
        <div>
          <label className="email">Username/Email</label>
          <input type="email" id="email" className="email-input" required />
        </div>
        <div>
          <label className="password">Password</label>
          <input
            type="password"
            id="password"
            className="password-input"
            required
          />
        </div>
        <div>
          <input className="login" type="submit" value="Log In" />
        </div>
        <div>
          <p className="or-login-label">Or</p>
        </div>
        <div>
          <button className="social-media-button-google"></button>
          <button className="social-media-button-apple"></button>
          <button className="social-media-button-facebook"></button>
        </div>
      </form>
    );
  }
}

export default ModalLogin;
