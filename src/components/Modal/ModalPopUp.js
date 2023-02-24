import React from "react";
import ModalLogin from "./ModalLogin";
import ModalSignUp from "./ModalSignUp";
import "../../styles/Modal/ModalLogin.css";
import "../../styles/Modal/ModalSignup.css";


export function ModalPopUp(props) {
  const [showSignUp, setShowSignUp] = React.useState(false);
  const handleShowSignUp = () => {
    setShowSignUp(true);
  };

  const handleShowLogin = () => {
    setShowSignUp(false);
  };

  return (
    <div>
      {showSignUp ? (
        <ModalSignUp handleShowLogin={handleShowLogin} />
      ) : (
        <ModalLogin handleShowSignUp={handleShowSignUp} />
      )}
    </div>
  );
}
