import React from "react";
import '../../../styles/CustomerProfilePage/Favorites/FavoritesField.css';

const FavoritesField = ({
  businessName,
  businessId,
  category,
  rating,
  distance,
  bio,
}) => {
  return (
    
    <div className="favorites-business-container">
      <div className="favorites-business-field">
      <img
          src={require("../../../images/pfpPlaceholder.png")}
          alt="profile"
          className="favorites-business-pfp"
        />
        <div className="favorites-business-header">
          <h2 className="favorites-business-name">Business{businessName}</h2>
        </div>
        <div className="favorites-info-container">
          <p className="favorites-category">{category}</p>
          <p className="favorites-rating">Rating: {rating}</p>
        </div>
      </div>
    </div>
  );
};
export default FavoritesField;

