import React from "react";
import BusinessField from "./BusinessField";
import "../styles/ListStyle.css";

const BusinessList = ({ businesses }) => {
  return (
    <div className="business-list-container">
      <div className="business-list">
        {businesses &&
          businesses.map((business) => (
            <BusinessField
              key={business.username}
              businessName={business.name}
              businessId={business.username}
              category={business.category}
              rating={business.rating}
              distance={business.distance}
              bio={business.bio}
            />
          ))}
      </div>
    </div>
  );
};

export default BusinessList;
