import React from "react";
import TopSellersField from "./TopSellersField";
import "../../styles/TopSellersPage/TopSellersListStyle.css";

export function TopSellersList({ businesses }) {
  return (
    <div className="top-sellers-business-list-container">
      <div className="top-sellers-businesslist">
        {businesses &&
          businesses.map((business) => (
            <TopSellersField
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
