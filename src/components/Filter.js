
import React, { useState } from "react";
import PropTypes from 'prop-types';

import "../styles/Filter.css";
// Title for Filters
const FilterHeader = ({ filter_title }) => {
  return (
    <header>
      <h1
        className="filter_title"
        
      >
        {filter_title}
        <div className="box">
        </div>
      </h1>
     
    </header>
    
  );
};
//stars
const Star = (star_title) => {
    const stars = document.querySelectorAll(".stars i");

    // Loop through the "stars" NodeList
    stars.forEach((star, index1) => {
    // Add an event listener that runs a function when the "click" event is triggered
    star.addEventListener("click", () => {
        // Loop through the "stars" NodeList Again
        stars.forEach((star, index2) => {
        // Add the "active" class to the clicked star and any stars with a lower index
        // and remove the "active" class from any stars with a higher index
        index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
        });
    });
    });
    
    


    return (
       
                <><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" /><div className="rating-box">
   
            <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div>
        </div></>
        
    );
};

export {Star};

// FilterHeader name text
FilterHeader.defaultProps ={
    filter_title: 'Filter',
}
// FilterHeader must be a string
FilterHeader.propTypes={
    filter_title: PropTypes.string.isRequired,
}

// List of filters with checkboxes 
const Checkboxes =() => {
  const checkbox1 = document.getElementById("AppliedCheckbox");
  const checkbox4 = document.getElementById("LocationClick");
  const checkbox6 = document.getElementById("DeadlineClick");

  const appliedClick = () => {
    if (checkbox1) {
      if (checkbox1.checked) {
        console.log("Applied Checkbox checked");
      } else {
        console.log("Applied Checkbox unchecked");
      }
    }
  };

  const locationClick = () => {
    if (checkbox4) {
      if (checkbox4.checked) {
        console.log("Location Checkbox checked");
      } else {
        console.log("Location Checkbox unchecked");
      }
    }
  };

  const deadlineClick = () => {
    if (checkbox6) {
      if (checkbox6.checked) {
        console.log("Dealine Checkbox checked");
      } else {
        console.log("Deadline Checkbox unchecked");
      }
    }
  };

  return (
    <ul>
      <li><input class="checkbox" type="checkbox" id="AppliedCheckbox" onClick={appliedClick}></input> Open Now</li>
      <li><input class="checkbox" type="checkbox" id="LocationClick" onClick={locationClick}></input> Within 50 mi</li>
      <li><input class="checkbox" type="checkbox" id="DeadlineClick" onClick={deadlineClick}></input> Price Range</li>
      <li><input class="checkbox" type="checkbox" id="DeadlineClick" onClick={deadlineClick}></input> Ratings</li>
    </ul>
    
  );
    }

export  {FilterHeader, Checkboxes};