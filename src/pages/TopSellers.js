import React, { useState, useEffect } from "react";
import { TopSellersList } from "../components/TopSellersPage/TopSellersList";
import businesses from "../components/TopSellersPage/TopSellersInfoEx";
import { API, graphqlOperation } from "aws-amplify";
import { listBusinesses } from "../graphql/queries.js";

export function TopSellers({ isLoggedIn }) {
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
        <TopSellersList businesses={businesses}/>
      </div>
    </div>
  );
}
