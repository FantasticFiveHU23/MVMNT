import React, { useState, useEffect } from "react";
import { TopSellersList } from "../components/TopSellersPage/TopSellersList";
import { API, graphqlOperation } from "aws-amplify";
import { listBusinesses } from "../graphql/queries.js";

export function TopSellers({ isLoggedIn }) {
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
    <div>
      <div className="page-content">
        <TopSellersList businesses={businessCollection}/>
      </div>
    </div>
  );
}
