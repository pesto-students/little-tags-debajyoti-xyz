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
          class="desktop-search-bar"
          value={""}
        />
      </label>
      <span class="search-icon">
        <SearchIconLogo />
      </span>
    </div>
  );
}
