import React from "react";
import SearchIconLogo from "../../iconComponents/SearchIconLogo.js";
import "./Header.scss";
export default function SearchBar() {
  return (
    <div className="search-bar">
      <label>
        <input
          type="text"
          placeholder="Search for products"
          className="desktop-search-bar"
          value={""}
        />
      </label>
      <span className="search-icon">
        <SearchIconLogo />
      </span>
    </div>
  );
}
