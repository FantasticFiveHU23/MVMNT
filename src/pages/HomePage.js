import React, {useEffect, useState} from "react";
import { Header } from "../components/Header";
import SearchBar from "../components/SearchBar";
import BusinessList from "../components/BusinessList";
import Footer from "../components/Footer";
import {Checkboxes, FilterHeader, Star} from "../components/Filter";
import businesses from "../components/BusinessInfoEx";
import {API, graphqlOperation} from 'aws-amplify';
import {listBusinesses} from '../graphql/queries.js'

export function HomePage({ isLoggedIn }) {
    const [businessCollection, setBusinessCollection] = useState()

    useEffect(() => {
        const fetchBusinessCollection = async()  => {
            const data = await API.graphql(graphqlOperation(listBusinesses))
            if (data) {
                setBusinessCollection(data.data.listBusinesses.items)
            }
        }
        fetchBusinessCollection()
    }, [])

    useEffect(() => {
        if (businessCollection) {
            console.log(businessCollection)
        }
    }, [businessCollection])

  return (
      <div>
          <div className="page-content">
             <Header isLoggedIn={isLoggedIn} />
             <SearchBar />
             <FilterHeader/>
             <Checkboxes/>
             <Star/>
             <BusinessList businesses={businessCollection}/>
          </div>
          <Footer/>
      </div>
  )
}