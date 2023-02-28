import React from "react";
import FavoritesField from "./FavoritesField";
import "../../../styles/CustomerProfilePage/Favorites/FavoritesList.css"

export function FavoritesList({ businesses }) {
  return (
    <div className="favorites-business-list-container">
      <div className="favorites-list">
        {businesses &&
          businesses.map((business) => (
            <FavoritesField
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