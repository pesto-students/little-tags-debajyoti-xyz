import React from "react";
import "./ProductCard.scss";
import { Link, useRouteMatch } from "react-router-dom";

export default function ProductCard({ value }) {
  let { match } = useRouteMatch();
  let id = value.iden;

  return (
    <div className="products-card">
      <Link to={`${match.url}/${id}`}>
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
