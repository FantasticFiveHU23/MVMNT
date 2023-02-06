import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import BusinessList from "../components/BusinessList";
import Footer from "../components/Footer";
import {FilterHeader, Checkboxes,Star} from "../components/Filter";
import businesses from "../components/BusinessInfoEx";

//Home Page (Not Logged In)
class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="page-content">
          <Header isLoggedIn={this.props.isLoggedIn} />
          <SearchBar />
          <FilterHeader/>
          <Checkboxes/>
          <Star/>
          <BusinessList businesses={businesses}/>
        </div>
        <Footer/>
      </div>
    );
  }
}
export default HomePage;