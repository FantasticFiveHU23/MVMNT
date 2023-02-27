import React, { useState, useEffect } from "react";
import {SearchBar} from "../components/SearchBar";
import { FindBusinessList } from "../components/FindBusinessPage/FindBusinessList";
import { FilterHeader, Checkboxes, Star } from "../components/Filters/Filter";
import businesses from "../components/FindBusinessPage/FindBusinessInfoEx";
import { API, graphqlOperation } from "aws-amplify";
import { listBusinesses } from "../graphql/queries.js";

export function FindBusinesses({ isLoggedIn }) {
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
        <SearchBar />
        <FilterHeader />
        <Checkboxes />
        <Star />
        <FindBusinessList businesses={businesses}/>
      </div>
    </div>
  );
}
