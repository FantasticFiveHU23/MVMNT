import React from "react";
import LocalFindsField from "./LocalFindsField";
import "../../styles/LocalFindsPage/LocalListStyle.css";

export function LocalFindsList({ businesses }) {
  return (
    <div className="local-business-list-container">
      <div className="local-business-list">
        {businesses &&
          businesses.map((business) => (
            <LocalFindsField
              key={business.username}
              businessName={business.name}
              businessId={business.username}
              category={business.category}
              // distance={business.distance}
              distance='4.5'
            />
          ))}
      </div>
    </div>
  );
}