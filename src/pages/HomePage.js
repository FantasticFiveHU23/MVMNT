import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import BusinessList from "../components/BusinessList";
import {API, graphqlOperation} from 'aws-amplify';
import { listBusinesses } from '../graphql/queries.js'

//Home Page (Not Logged In) 
class HomePage extends React.Component {
  state = { business: []}
  async componentDidMount(){
    const businessData = await API.graphql(graphqlOperation(listBusinesses));
    this.setState({ business: businessData.data.listBusinesses.items })
  }
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

        </div>
      </div>
    );
  }
}
export default HomePage;

