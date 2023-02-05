import React from 'react';
import '../styles/LoginButton.css';
import '../styles/ModalLogin.css';

class LoginButton extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button className="login-button" onClick={this.toggleModal}>
          Log In
        </button>
      </React.Fragment>
    );
  }
}
export default LoginButton;
