import React from "react";

import { FaShoppingBag } from "react-icons/fa";

import "./Header.scss";

export default function ShoppingCart({ quantity }) {
  return (
    <div className="prod-details">
      <FaShoppingBag
        size={70}
        style={{ width: "30px", height: "30px", marginTop: "10px" }}
      />
      <span className={quantity === 0 ? "hide-price" : ""}>{quantity}</span>
    </div>
  );
}
