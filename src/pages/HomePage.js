import React, {useEffect, useState} from "react";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { BusinessList } from "../components/BusinessListHome/BusinessList";
import { Footer } from "../components/Footer";
import { Checkboxes, FilterHeader, Star } from "../components/Filters/Filter"

export function HomePage({ isLoggedIn, businessCollection }) {


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