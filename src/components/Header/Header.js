import React from "react";
import "./Header.scss";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import { FaShoppingBag } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import websitelogo from "../../assets/websitelogo.png";
export default function Header() {
  return (
    <div className="header">
      <img
        src={websitelogo}
        style={{
          width: "60px",
          height: "60px",
          padding: "10px",
        }}
        alt="WebsiteImage logo"
      />
      <Navigation />
      <SearchBar />
      <div className="login">
        <BsPersonFill
          size={70}
          style={{
            width: "30px",
            height: "30px",
            marginRight: "30px",
            marginTop: "10px",
          }}
        />

        <FaShoppingBag
          size={70}
          style={{ width: "30px", height: "30px", marginTop: "10px" }}
        />
      </div>
    </div>
  );
}
