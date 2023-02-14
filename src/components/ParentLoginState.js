import React, { useState } from "react";
import FormLoginButton from "./FormLoginButton";
import Header from "./Header";

export function ParentLoginState() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const updateLogin = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} />
      <FormLoginButton updateLogin={updateLogin} />
    </div>
  );
}
