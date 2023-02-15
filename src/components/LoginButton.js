import React from "react";
import "../styles/LoginButton.css";
import "../styles/ModalPopUp.css";
import {ModalPopUp} from "./ModalPopUp";

export function LoginButton() {
  const [showModal, setShowModal] = React.useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <React.Fragment>
      <button className="login-button" onClick={toggleModal}>
        Log In
      </button>
      {showModal ? (
        <div className="modal">
          <span className="close-button" onClick={toggleModal}>
            ×
          </span>
          <ModalPopUp />
        </div>
      ) : null}
    </React.Fragment>
  );
};