import React, { Component } from "react";
import ModalLogin from './Modal/ModalLogin';
import ModalSignUp from './Modal/ModalSignUp';
import '../styles/ModalLogin.css';
import '../styles/ModalSignup.css';


class ModalPopUp extends Component {
    state = {
      showSignUp: false,
    };
  
    handleShowSignUp = () => {
      this.setState({
        showSignUp: true,
      });
    };
  
    handleShowLogin = () => {
      this.setState({
        showSignUp: false,
      });
    };
  
    render() {
      const { showSignUp } = this.state;
  
      return (
        <div>
          {showSignUp ? (
            <ModalSignUp
              handleShowLogin={this.handleShowLogin}
            />
          ) : (
            <ModalLogin
              handleShowSignUp={this.handleShowSignUp}
            />
          )}
        </div>
      );
    }
  }
  
  export default ModalPopUp;