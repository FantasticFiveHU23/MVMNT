import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="page-content">
          <Header />
          <SearchBar/>
        </div>
      </div>
    );
  }
}
export default HomePage;