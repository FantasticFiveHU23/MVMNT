import React, { useState, useEffect } from "react";
import businesses from "../components/TopSellersPage/TopSellersInfoEx";
import { API, graphqlOperation } from "aws-amplify";
import { listBusinesses } from "../graphql/queries.js";
import { CategoriesContainer } from "../components/CategoriesPage/CategoriesContainer";
import "../styles/CategoriesPage/Categories.css";

export function Categories({ isLoggedIn }) {
  // eslint-disable-next-line
  const [business, setBusiness] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const businessData = await API.graphql(graphqlOperation(listBusinesses));
      setBusiness(businessData.data.listBusinesses.items);
    };
    fetchData();
  }, []);

  return (
      <div className="page-content">
        <CategoriesContainer/>
      </div>
  );
};