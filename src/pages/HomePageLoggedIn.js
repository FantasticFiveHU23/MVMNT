import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

class HomePageLoggedIn extends React.Component {
  render() {
    return (
      <div>
        <div className="page-content">
          <Header isLoggedIn={true}/>
          <SearchBar/>
        </div>
      </div>
    );
  }
}
export default HomePageLoggedIn;