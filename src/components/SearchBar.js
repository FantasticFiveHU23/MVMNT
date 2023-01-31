import { render } from "@testing-library/react";
import React, { useState } from "react";
import "../styles/SearchBar.css";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  // Take in search input
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  // Resets search value to "" after a search
  const resetInputField = () => {
    setSearchValue("");
  };

  // Occurs after you submit a search
  const callSearchFunction = (e) => {
    e.preventDefault();
    console.log(searchValue);
    resetInputField();
  };

  return (
    <form className="search-form">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
        className="search-bar"
        placeholder="Search"
      />
      <button
        className="search-button"
        onClick={callSearchFunction}
        type="submit"
      >
      </button>
    </form>
  );
};

export default SearchBar;
