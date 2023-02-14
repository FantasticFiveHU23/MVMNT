import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Dashboard from "../components/B-page/Dashboardbutton";
import Footer from "../components/Footer";
import businesses from "../components/BusinessInfoEx";
import '../styles/BusinessPage.css'


class Businesspage extends React.Component {
  render() {
    return (
      <div>
        <div className="page-content">
         <h2>[Business Name]</h2>
        
          

          
          <Dashboard/>
   
        </div>
        <Footer/>
      </div>
    );
  }
}
export default Businesspage;