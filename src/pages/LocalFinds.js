import React, { useState, useEffect } from "react";
import { LocalFindsList } from "../components/LocalFindsPage/LocalFindsList";
import businesses from "../components/LocalFindsPage/LocalFindsInfoEx";
import { API, graphqlOperation } from "aws-amplify";
import { listBusinesses } from "../graphql/queries.js";
import { LocalMaps } from "../components/LocalFindsPage/LocalMaps";
import "../styles/LocalFindsPage/LocalFinds.css";

export function LocalFinds({ location, isLoggedIn }) {
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
    <div>
      <div className="page-content">
        <h2 className="title">{location}</h2>
        <LocalMaps/>
        <LocalFindsList businesses={businesses}/>
      </div>
    </div>
  );
}