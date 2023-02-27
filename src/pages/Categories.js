import React, { useState, useEffect } from "react";
import { CategoriesContainer } from "../components/CategoriesPage/CategoriesContainer";
import "../styles/CategoriesPage/Categories.css";

export function Categories({ isLoggedIn }) {
  // eslint-disable-next-line
  const [business, setBusiness] = useState([]);

  return (
      <div className="page-content">
        <CategoriesContainer/>
      </div>
  );
};