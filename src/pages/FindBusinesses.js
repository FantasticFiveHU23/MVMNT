import React, { useState, useEffect } from "react";
import {SearchBar} from "../components/SearchBar";
import { FindBusinessList } from "../components/FindBusinessPage/FindBusinessList";
import { FilterHeader, Checkboxes, Star } from "../components/Filters/Filter";
import { API, graphqlOperation } from "aws-amplify";
import { listBusinesses } from "../graphql/queries.js";

export function FindBusinesses({ isLoggedIn }) {
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
        <SearchBar />
        <FilterHeader />
        <Checkboxes />
        <Star />
        <FindBusinessList businesses={businessCollection}/>
      </div>
    </div>
  );
}
