import React from "react";
import ModalLogin from "./Modal/ModalLogin";
import ModalSignUp from "./Modal/ModalSignUp";
import "../styles/ModalLogin.css";
import "../styles/ModalSignup.css";


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
