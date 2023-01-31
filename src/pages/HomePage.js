import React from "react";
import Header from "../components/Header";
<<<<<<< HEAD
import SearchBar from "../components/SearchBar";
import BusinessList from "../components/BusinessList";

//Home Page (Not Logged In)
class HomePage extends React.Component {
  render() {
    const businesses = [
      {
        businessName: "Example Business",
        businessId: "@businessexample1",
        category: "Food & Drink",
        rating: 4.5,
        distance: "1.5 miles",
        bio: "This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. ",
      },
      {
        businessName: "Example Business",
        businessId: "@businessexamle2",
        category: "Food & Drink",
        rating: 4.5,
        distance: "1.5 miles",
        bio: "This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. ",
      },
            {
        businessName: "Example Business",
        businessId: "@businessexample3",
        category: "Food & Drink",
        rating: 4.5,
        distance: "1.5 miles",
        bio: "This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. ",
      },
      {
        businessName: "Example Business",
        businessId: "@businessexample4",
        category: "Food & Drink",
        rating: 4.5,
        distance: "1.5 miles",
        bio: "This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. ",
      },
      {
        businessName: "Example Business",
        businessId: "@businessexample5",
        category: "Food & Drink",
        rating: 4.5,
        distance: "1.5 miles",
        bio: "This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. ",
      },
      {
        businessName: "Example Business",
        businessId: "@businessexample6",
        category: "Food & Drink",
        rating: 4.5,
        distance: "1.5 miles",
        bio: "This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. This is an example business bio. ",
      },
    ];
    return (
      <div>
        <div className="page-content">
          <Header isLoggedIn={false} />
          <SearchBar />
          <BusinessList businesses={businesses}/>

=======

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="page-content">
          <Header />
>>>>>>> 81784fec8f229c241fbeffa4bde0ed0283124f8a
        </div>
      </div>
    );
  }
}
<<<<<<< HEAD
export default HomePage;

=======
export default HomePage;
>>>>>>> 81784fec8f229c241fbeffa4bde0ed0283124f8a
