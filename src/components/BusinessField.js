import React from "react";
import "../styles/BusinessField.css";

const BusinessField = ({
  businessName,
  businessId,
  category,
  rating,
  distance,
  bio,
}) => {
  return (
    
    <div className="business-container">
      <div className="business-field">
        <img
          src={require("../images/pfpPlaceholder.png")}
          alt="profile"
          className="business-pfp"
        />
        <div className="business-header">
          <h2 className="business-name">{businessName}</h2>
          <p className="business-id">{businessId}</p>
        </div>
        <div className="info-container">
          <p className="category">{category}</p>
          <p className="rating">Rating: {rating}</p>
          <p className="distance">{distance}</p>
        </div>
        <div className="bio-container">
            <p className="bio">Bio: {bio}</p>
        </div>
      </div>
    </div>
  );
};
export default BusinessField;

// <p className="distance">Distance: {distance}</p>
