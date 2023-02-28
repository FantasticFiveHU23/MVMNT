import React from "react";
import "../../../styles/CustomerProfilePage/Favorites/Favorites.css";
import businesses from "./FavoritesInfoEx";
import { FavoritesList } from "./FavoritesList";

export function Favorites() {
    return (
      <div className="favorites-container">
        <div className="favorites-header">
          <h2 className="favorites-header-text">Favorites</h2>
        </div>
        <FavoritesList businesses={businesses} />
      </div>
    );
  }
