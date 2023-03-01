import React, { useState, useEffect } from "react";
import { LocalFindsList } from "../components/LocalFindsPage/LocalFindsList";
// import businesses from "../components/LocalFindsPage/LocalFindsInfoEx";
import { API, graphqlOperation } from "aws-amplify";
import { listBusinesses } from "../graphql/queries.js";
import { LocalMaps } from "../components/LocalFindsPage/LocalMaps";
import "../styles/LocalFindsPage/LocalFinds.css";

export function LocalFinds({ location, isLoggedIn }) {
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
        <h2 className="title">{location}</h2>
        <LocalMaps/>
        <LocalFindsList businesses={businessCollection}/>
      </div>
    </div>
  );
}