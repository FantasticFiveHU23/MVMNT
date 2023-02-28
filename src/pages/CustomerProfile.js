import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listBusinesses } from "../graphql/queries.js";
import { ProfileInfo } from "../components/CustomerProfile/CustomerInfo/ProfileInfo";
import { MyReviews } from "../components/CustomerProfile/MyReviews/MyReviews.js";
import { Favorites } from "../components/CustomerProfile/Favorites/Favorites.js";
import businesses from "../components/CustomerProfile/Favorites/FavoritesInfoEx.js";

export function CustomerProfile({ isLoggedIn }) {
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
        <ProfileInfo />
        <MyReviews />
        <Favorites />
      </div>
  );
};