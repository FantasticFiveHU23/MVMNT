import React from "react";
import "../../styles/CategoriesPage/CategoryButtons.css";
export function CategoryButtons({ businesses, image, text }) {
  return (
    <button className="category-button">
      <img src={image} alt="category" />
      <span className="category-text">{text}</span>
    </button>
  );
}
