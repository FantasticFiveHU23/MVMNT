import React from 'react';
import '../styles/LoginButton.css';
import '../styles/ModalLogin.css';
import ModalLogin from './Modal/ModalLogin';

class LoginButton extends React.Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  render() {
    return (
      <React.Fragment>
        <button className="login-button" onClick={this.toggleModal}>
          Log In
        </button>
        {this.state.showModal ? (
          <div className="modal">
            <div className="modal-content">
              <span className="close-button" onClick={this.toggleModal}>
                &times;
              </span>
              <ModalLogin/>
            </div>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}
export default LoginButton;