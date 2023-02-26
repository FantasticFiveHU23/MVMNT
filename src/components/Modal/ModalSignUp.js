import React, { Component } from "react";
import { Auth } from 'aws-amplify';

async function signUp() {
  try {
      alert("signUp function running");
      const { user } = await Auth.signUp({
          username: document.getElementById('username').value,
          password: document.getElementById('password').value,
          attributes: {
              email: document.getElementById('email').value 
          },
          autoSignIn: { // optional - enables auto sign in after user is confirmed
              enabled: true,
          }
      });
      console.log("SignUp Function successfully called");
      console.log(user);
  } catch (error) {
      console.log('error signing up:', error);
  }
  console.log("End of Signup Function");
}
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
        <div className="radio-container">
          <label>
            <input type="radio" name="account-type" className="customer-signup" value="customer" /> 
            I am a Customer
          </label>
          <label>
            <input type="radio" name="account-type" className="business-signup" value="business" /> 
            I am a Business
          </label>
        </div>
        <div>
          <input className="signup-login" type="submit" value="Sign Up" onClick={signUp} /> 
          {/*  Line 63 triggers when clicking "Need an Account" not Log In... */}
        </div>
        <div>
          <p className="signup-or-login-label">Or</p>
        </div>

      </form>
    );
  }
}

export default ModalSignUp;
