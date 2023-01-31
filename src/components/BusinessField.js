import React from 'react';
import '../styles/BusinessField.css';

const BusinessField = ({ businessName, businessId, category, rating, distance, bio }) => {
  return (
    <div className="business-field">
      <h2>{businessName}</h2>
      <p className="business-id">Business ID: {businessId}</p>
      <p className="category">Category: {category}</p>
      <p className="rating">Rating: {rating}</p>
      <p className="distance">Distance: {distance}</p>
      <p className="bio">Bio: {bio}</p>
    </div>
  );
};
export default BusinessField;