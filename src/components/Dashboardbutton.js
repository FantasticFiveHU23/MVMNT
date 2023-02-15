import React from "react";
import "../styles/Dashboardbutton.css";
import { Header } from "./Header";

export const Dashboard = ({ isLoggedIn }) => {
  return (
    <>
      <div>
        <Header isLoggedIn={isLoggedIn} />
      </div>
      <div id="container">
        <button>Business Dashboard</button>
        <button>View Your Business</button>

        <button>Product View</button>
        <button>Business Analytics</button>
      </div>
    </>
  );
};
