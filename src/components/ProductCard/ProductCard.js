import React from "react";
import "./ProductCard.scss";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import ProductDetails from "../ProductDetails/ProductDetails";

export default function ProductCard({ value }) {
  let { path, url } = useRouteMatch();
  console.log("inside product card", value.iden);
  console.log("inside path", path);
  let id = value.iden;
  console.log("inside url@@@@@@", url);

  return (
    <div className="products-card">
      <Link to={`${url}/${id}`}>
        <div>
          <img className="products-cover" src={value.image} alt={value.title} />
        </div>
        <div className="multicard-content">
          <p className="title">{value.title}</p>
        </div>

        <div className="products-price-addtobag">
          <div>Rs.{value.price}</div>
          <button className="add-to-cart">
            <p>add to cart</p>
          </button>
        </div>
      </Link>
    </div>
  );
}
