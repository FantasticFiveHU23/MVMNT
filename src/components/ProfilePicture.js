import React from "react";
import "../styles/ProfilePicture.css";

export function ProfilePicture(props) {
  const containerClass = props.className ? `profile-picture-container ${props.className}` : "profile-picture-container";
  
  return (
    <div className={containerClass}>
      <img
        src={require("../images/pfpPlaceholder.png")}
        alt="profile"
        className="profile-picture-image"
      />
    </div>
  );
};
