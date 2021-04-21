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
      <div className="header-content">
        <img
          src={websitelogo}
          style={{
            width: "60px"
          }}
          alt="Kool Dress logo"
        />
        <Navigation />
        <SearchBar />
        <div className="login-icon-group">
          <div className="labeled-icon">
            <span>Login / Signup</span>
            <BsPersonFill />
          </div>
          <div className="labeled-icon">
            <span>Bag</span>
            <FaShoppingBag />
          </div>
        </div>
      </div>
    </header>
  );
}
