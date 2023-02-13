import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import BusinessList from "../components/BusinessList";
import Footer from "../components/Footer";
import {FilterHeader, Checkboxes,Star} from "../components/Filter";
import businesses from "../components/BusinessInfoEx";
import {API, graphlOperation} from 'aws-amplify';
import { listBusinesses } from '../graphql/queries.js'

//Home Page (Not Logged In) 
class HomePage extends React.Component {
  state = { business: []}
  async componentDidMount(){
    const businessData = await API.graphql(graphqlOperation(listBusinesses));
    this.setState({ business: businessData.data.listBusinesses.items })
  }
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