import React from "react";
import BusinessField from "./BusinessField";
import "../../styles/BusinessListHome/ListStyle.css";

export function BusinessList({ businesses }) {
  return (
    <div className="business-list-container">
      <div className="business-list">
        {businesses &&
          businesses.map((business) => (
            <BusinessField
              key={business.businessId}
              businessName={business.businessName}
              businessId={business.businessId}
              category={business.category}
              rating={business.rating}
              distance={business.distance}
              bio={business.bio}
            />
          ))}
      </div>
    </div>
  );
}
