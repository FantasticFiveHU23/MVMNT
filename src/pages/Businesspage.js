import React from "react";
import Dashboard from "../components/BusinessPage/Dashboardbutton";
import {Footer} from "../components/Footer";
import '../styles/BusinessPage/BusinessPage.css'
import Review from "../components/BusinessPage/reviewfeed";

export default class BusinessPage extends React.Component {
  render() {
    return (
      <div>
        <div className="page-content">
         <h2>[Business Name]</h2>
        
          

          
          <Dashboard/>
          <Review/>
   
        </div>
      </div>
    );
  }
};