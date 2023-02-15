import React, { useState, useEffect } from "react";
import {Header} from "../components/Header";
import {SearchBar} from "../components/SearchBar";
import { BusinessList } from "../components/BusinessList";
import { FilterHeader, Checkboxes, Star } from "../components/Filter";
import businesses from "../components/BusinessInfoEx";
import { API, graphqlOperation } from "aws-amplify";
import { listBusinesses } from "../graphql/queries.js";

export function HomePage({ isLoggedIn }) {
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
        <Header isLoggedIn={isLoggedIn} />
        <SearchBar />
        <FilterHeader />
        <Checkboxes />
        <Star />
        <BusinessList businesses={businesses} />
      </div>
    </div>
  );
}
