import React, { useState } from "react";
import "../styles/SearchBar.css";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    // Search function logic here
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
