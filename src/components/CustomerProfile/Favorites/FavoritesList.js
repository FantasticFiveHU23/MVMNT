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
              key={business.username}
              businessName={business.name}
              category={business.category}
              rating={business.rating}
            />
          ))}
      </div>
    </div>
  );
}