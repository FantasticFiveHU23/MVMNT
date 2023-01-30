import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

class HomePageLoggedIn extends React.Component {
  render() {
    return (
      <div>
        <div className="page-content">
          <Header isLoggedIn={true}/>{/* 'isLoggedIn={true}' will check if user is logged in or not. If true/false, Header design will change.*/}
          <SearchBar/>{/* Import SearchBar to HomePage */}
        </div>
      </div>
    );
  }
}
export default HomePageLoggedIn;