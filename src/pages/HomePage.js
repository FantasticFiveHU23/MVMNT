import React from "react";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import {FilterHeader, Checkboxes,Star} from "../components/Filter"
class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="page-content">
          <Header />
          <SearchBar/>
          <FilterHeader/>
          <Checkboxes/>
          <Star/>
        </div>
      </div>
    );
  }
}
export default HomePage;