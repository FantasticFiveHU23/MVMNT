import React from "react";
import "../../styles/LocalFindsPage/LocalBusinessField.css";

const LocalFindsField = ({
  businessName,
  businessId,
  category,
  rating,
  distance,
  bio,
}) => {
  return (
    
    <div className="local-business-container">
      <div className="local-business-field">
        <img
          src={require("../../images/pfpPlaceholder.png")}
          alt="profile"
          className="local-business-pfp"
        />
        <div className="local-business-header">
          <h2 className="local-business-name">{businessName}</h2>
          <p className="local-business-id">{businessId}</p>
        </div>
        <div className="local-info-container">
          <p className="local-category">{category}</p>
          <p className="local-rating">{rating}</p>
          <p className="local-distance">{distance}</p>
        </div>
        <div className="local-bio-container">
            <p className="local-bio">{bio}</p>
        </div>
      </div>
    </div>
  );
};
export default LocalFindsField;
