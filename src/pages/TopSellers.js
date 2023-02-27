import React, { useState, useEffect } from "react";
import { TopSellersList } from "../components/TopSellersPage/TopSellersList";
import businesses from "../components/TopSellersPage/TopSellersInfoEx";

export function TopSellers({ isLoggedIn }) {
  // eslint-disable-next-line
  const [business, setBusiness] = useState([]);

  return (
    <div>
      <div className="page-content">
        <TopSellersList businesses={businesses}/>
      </div>
    </div>
  );
}
