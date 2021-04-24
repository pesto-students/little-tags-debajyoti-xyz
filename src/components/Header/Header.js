import React, { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import LoginSignUpModal from "../LoginSignUpModal/LoginSignUpModal";

import websitelogo from "../../assets/websitelogo.png";

import "./Header.scss";

export default function Header() {
  // psst. we only have LoginSignUpModal
  const [isModalVisible, setModalVisible] = useState(false);

  const handleLoginClick = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <header className="header">
      <div className="header-content">
        <img
          src={websitelogo}
          style={{
            width: "60px",
          }}
          alt="Kool Dress logo"
        />
        <Navigation />
        <SearchBar />
        <div className="login-icon-group">
          <div
            className="labeled-icon"
            role="button"
            onClick={handleLoginClick}
          >
            <span>Login / Signup</span>
            <BsPersonFill />
          </div>
          <div className="labeled-icon" role="button">
            <span>Bag</span>
            <FaShoppingBag />
          </div>
        </div>
      </div>
      <LoginSignUpModal isOpen={isModalVisible} onClose={handleModalClose} />
    </header>
  );
}
