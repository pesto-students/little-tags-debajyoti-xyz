import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";
import * as ROUTES from "../../constants/routes";

export default function Navigation() {
  return (
    <ul className="menu-bar">
      <li style={{ fontWeight: "40px" }}>
        <Link
          style={{ textDecoration: "none", color: "black", fontWeight: "40px" }}
          to={ROUTES.MEN}
        >
          MEN
        </Link>
      </li>
      <li>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={ROUTES.WOMEN}
        >
          WOMEN
        </Link>
      </li>
      <li>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={ROUTES.JEWELLERY}
        >
          JEWELLERY
        </Link>
      </li>
      <li>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={ROUTES.ELECTRONICS}
        >
          ELECTRONICS
        </Link>
      </li>
    </ul>
  );
}
