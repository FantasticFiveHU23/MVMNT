import React, { useState, useEffect } from "react";
import {SearchBar} from "../components/SearchBar";
import { FindBusinessList } from "../components/FindBusinessPage/FindBusinessList";
import { FilterHeader, Checkboxes, Star } from "../components/Filters/Filter";
import businesses from "../components/FindBusinessPage/FindBusinessInfoEx";

export function FindBusinesses({ isLoggedIn }) {
  // eslint-disable-next-line
  const [business, setBusiness] = useState([]);

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
