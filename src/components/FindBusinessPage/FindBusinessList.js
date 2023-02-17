import React from "react";
import FindBusinessField from "./FindBusinessField";
import "../../styles/FindBusinessPage/FindListStyle.css";

export function FindBusinessList({ businesses }) {
  return (
    <div className="find-business-list-container">
      <div className="find-business-list">
        {businesses &&
          businesses.map((business) => (
            <FindBusinessField
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
