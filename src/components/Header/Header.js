import React from "react";
import "./Header.scss";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import { FaShoppingBag } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import websitelogo from "../../assets/websitelogo.png";
export default function Header() {
  return (
    <header className="header">
      <img
        src={websitelogo}
        style={{
          width: "60px",
          height: "60px",
          padding: "10px",
        }}
        alt="Kool Dress logo"
      />
      <Navigation />
      <SearchBar />
      <div className="login-icon-group">
        <BsPersonFill size={70} />
        <FaShoppingBag size={70} />
      </div>
    </header>
  );
}
