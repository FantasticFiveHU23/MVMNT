import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import BusinessList from "../components/BusinessList";
import {FilterHeader, Checkboxes,Star} from "../components/Filter"
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
        bio: "The sun was setting over the horizon, painting the sky with a mix of oranges, pinks and purples. The air was still, with only the occasional chirping of crickets breaking the silence. Emily sat on the porch of her cottage, lost in thought. She had always loved this time of day, when the world seemed to slow down and all her worries melted away. She took a deep breath, savoring the sweet scent of blooming flowers that surrounded her. For a moment, everything was perfect.",
      },
      {
        businessName: "Example Business",
        businessId: "@businessexamle2",
        category: "Food & Drink",
        rating: 4.5,
        distance: "1.5 miles",
        bio: "The sun was setting over the horizon, painting the sky with a mix of oranges, pinks and purples. The air was still, with only the occasional chirping of crickets breaking the silence. Emily sat on the porch of her cottage, lost in thought. She had always loved this time of day, when the world seemed to slow down and all her worries melted away. She took a deep breath, savoring the sweet scent of blooming flowers that surrounded her. For a moment, everything was perfect.",
      },
            {
        businessName: "Example Business",
        businessId: "@businessexample3",
        category: "Food & Drink",
        rating: 4.5,
        distance: "1.5 miles",
        bio: "The sun was setting over the horizon, painting the sky with a mix of oranges, pinks and purples. The air was still, with only the occasional chirping of crickets breaking the silence. Emily sat on the porch of her cottage, lost in thought. She had always loved this time of day, when the world seemed to slow down and all her worries melted away. She took a deep breath, savoring the sweet scent of blooming flowers that surrounded her. For a moment, everything was perfect.",
      },
      {
        businessName: "Example Business",
        businessId: "@businessexample4",
        category: "Food & Drink",
        rating: 4.5,
        distance: "1.5 miles",
        bio: "The sun was setting over the horizon, painting the sky with a mix of oranges, pinks and purples. The air was still, with only the occasional chirping of crickets breaking the silence. Emily sat on the porch of her cottage, lost in thought. She had always loved this time of day, when the world seemed to slow down and all her worries melted away. She took a deep breath, savoring the sweet scent of blooming flowers that surrounded her. For a moment, everything was perfect.",
      },
      {
        businessName: "Example Business",
        businessId: "@businessexample5",
        category: "Food & Drink",
        rating: 4.5,
        distance: "1.5 miles",
        bio: "The sun was setting over the horizon, painting the sky with a mix of oranges, pinks and purples. The air was still, with only the occasional chirping of crickets breaking the silence. Emily sat on the porch of her cottage, lost in thought. She had always loved this time of day, when the world seemed to slow down and all her worries melted away. She took a deep breath, savoring the sweet scent of blooming flowers that surrounded her. For a moment, everything was perfect.",
      },
      {
        businessName: "Example Business",
        businessId: "@businessexample6",
        category: "Food & Drink",
        rating: 4.5,
        distance: "1.5 miles",
        bio: "The sun was setting over the horizon, painting the sky with a mix of oranges, pinks and purples. The air was still, with only the occasional chirping of crickets breaking the silence. Emily sat on the porch of her cottage, lost in thought. She had always loved this time of day, when the world seemed to slow down and all her worries melted away. She took a deep breath, savoring the sweet scent of blooming flowers that surrounded her. For a moment, everything was perfect.",
      },
    ];
    return (
      <div>
        <div className="page-content">
          <Header isLoggedIn={false} />
          <SearchBar />
          <FilterHeader/>
          <Checkboxes/>
          <Star/>
          <BusinessList businesses={businesses}/>

        </div>
      </div>
    );
  }
}
export default HomePage;

