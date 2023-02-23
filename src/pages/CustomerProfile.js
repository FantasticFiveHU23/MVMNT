import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listBusinesses } from "../graphql/queries.js";
import { ProfileInfo } from "../components/CustomerProfile/ProfileInfo.js";
import { MyReviews } from "../components/CustomerProfile/MyReviews.js";
import { Favorites } from "../components/CustomerProfile/Favorites.js";

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
        {/* <MyReviews />
        <Favorites /> */}
      </div>
  );
};