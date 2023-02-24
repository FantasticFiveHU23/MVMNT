import React from "react";
import "../../styles/TopSellersPage/TopSellersField.css";

const TopSellersField = ({
  businessName,
  businessId,
  category,
  rating,
  distance,
  bio,
}) => {
  return (
    
    <div className="top-sellers-business-container">
      <div className="top-sellers-business-field">
        <img
          src={require("../../images/pfpPlaceholder.png")}
          alt="profile"
          className="top-sellers-business-pfp"
        />
        <div className="top-sellers-business-header">
          <h2 className="top-sellers-business-name">{businessName}</h2>
          <p className="top-sellers-business-id">{businessId}</p>
        </div>
        <div className="top-sellers-info-container">
          <p className="top-sellers-category">{category}</p>
          <p className="top-sellers-rating">Rating: {rating}</p>
          <p className="top-sellers-distance">{distance}</p>
        </div>
        <div className="top-sellers-bio-container">
            <p className="top-sellers-bio">Bio: {bio}</p>
        </div>
      </div>
    </div>
  );
};
export default TopSellersField;

