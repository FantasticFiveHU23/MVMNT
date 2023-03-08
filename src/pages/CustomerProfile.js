import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listBusinesses } from "../graphql/queries.js";
import { ProfileInfo } from "../components/CustomerProfile/CustomerInfo/ProfileInfo";
import { MyReviews } from "../components/CustomerProfile/MyReviews/MyReviews.js";
import { Favorites } from "../components/CustomerProfile/Favorites/Favorites.js";

export function CustomerProfile({ isLoggedIn }) {
  const [businessCollection, setBusinessCollection] = useState()

  useEffect(() => {
      const fetchBusinessCollection = async()  => {
          const data = await API.graphql(graphqlOperation(listBusinesses))
          if (data) {
              setBusinessCollection(data.data.listBusinesses.items)
          }
      }
      fetchBusinessCollection()
  }, [])

  useEffect(() => {
      if (businessCollection) {
          console.log(businessCollection)
      }
  }, [businessCollection])

  return (
      <div className="page-content">
        <ProfileInfo />
        <MyReviews businesses={businessCollection}/>
        <Favorites businesses={businessCollection}/>
      </div>
  );
};