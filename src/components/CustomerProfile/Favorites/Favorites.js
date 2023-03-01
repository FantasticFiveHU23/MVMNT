import React from "react";
import "../../../styles/CustomerProfilePage/Favorites/Favorites.css";
import { FavoritesList } from "./FavoritesList";

export function Favorites({businesses}) {
    return (
      <div className="favorites-container">
        <div className="favorites-header">
          <h2 className="favorites-header-text">Favorites</h2>
        </div>
        <FavoritesList businesses={businesses} />
      </div>
    );
  }
