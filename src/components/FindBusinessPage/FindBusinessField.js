import React from "react";
import "../../styles/FindBusinessPage/FindBusinessField.css";

const FindBusinessField = ({
  businessName,
  businessId,
  category,
  rating,
  distance,
  bio,
}) => {
  return (
    
    <div className="find-business-container">
      <div className="find-business-field">
        <img
          src={require("../../images/pfpPlaceholder.png")}
          alt="profile"
          className="find-business-pfp"
        />
        <div className="find-business-header">
          <h2 className="find-business-name">{businessName}</h2>
          <p className="find-business-id">{businessId}</p>
        </div>
        <div className="find-info-container">
          <p className="find-category">{category}</p>
          <p className="find-rating">Rating: {rating}</p>
          <p className="find-distance">{distance}</p>
        </div>
        <div className="find-bio-container">
            <p className="find-bio">Bio: {bio}</p>
        </div>
      </div>
    </div>
  );
};
export default FindBusinessField;

