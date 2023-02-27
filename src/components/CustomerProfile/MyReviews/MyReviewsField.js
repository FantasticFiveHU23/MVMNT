import React from "react";
import '../../../styles/CustomerProfilePage/MyReviews/MyReviewsField.css';

const MyReviewsField = ({
  businessName,
  businessId,
  category,
  rating,
  distance,
  bio,
}) => {
  return (
    
    <div className="myreviews-business-container">
      <div className="myreviews-business-field">
        <div className="myreviews-business-header">
          <h2 className="myreviews-business-name">Business Name{businessName}</h2>
        </div>
        <div className="myreviews-info-container">
          <p className="myreviews-category">{category}</p>
          <p className="myreviews-rating">Rating: {rating}</p>
        </div>
        <div className="myreviews-bio-container">
            <p className="myreviews-bio">Bio: {bio}</p>
        </div>
      </div>
    </div>
  );
};
export default MyReviewsField;

