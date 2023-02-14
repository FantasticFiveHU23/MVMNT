import React from "react";
import "../styles/ProfilePicture.css";

export function ProfilePicture() {
  return (
    <div className="profile-picture-container">
      <img
        src={require("../images/pfpPlaceholder.png")}
        alt="profile"
        className="profile-picture"
      />
    </div>
  );
};