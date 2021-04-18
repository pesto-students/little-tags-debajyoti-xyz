import React, { useCallback, useState } from "react";
import { BsX } from "react-icons/bs";
import SearchIconLogo from "../../iconComponents/SearchIconLogo.js";
import "./Header.scss";

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");

  const handleSearchInputChange = useCallback((event) => {
    const value = event.target.value;
    setSearchText(value);
  }, []);

  const handleClear = useCallback((event) => {
    event.stopPropagation();
    setSearchText("");
  }, []);

  const showClear = !!searchText;

  return (
    <div className="search-bar">
      <label>
        <input
          type="text"
          placeholder="Search for products"
          className="desktop-search-bar"
          value={searchText}
          onChange={handleSearchInputChange}
        />
      </label>
      <span className="search-icon" role="presentation">
        {showClear ? (
          <BsX size={24} role="button" onClick={handleClear} />
        ) : (
          <SearchIconLogo />
        )}
      </span>
    </div>
  );
}
