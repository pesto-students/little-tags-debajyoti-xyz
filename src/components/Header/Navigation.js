import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

import "./Navigation.scss";

export default function Navigation() {
  return (
    <ul className="menu-bar">
      <li className="menu-bar-styling">
        <Link className="linkstyling" to={ROUTES.MEN}>
          MEN
        </Link>
      </li>
      <li>
        <Link className="linkstyling" to={ROUTES.WOMEN}>
          WOMEN
        </Link>
      </li>
      <li>
        <Link className="linkstyling" to={ROUTES.JEWELLERY}>
          JEWELLERY
        </Link>
      </li>
      <li>
        <Link className="linkstyling" to={ROUTES.ELECTRONICS}>
          ELECTRONICS
        </Link>
      </li>
    </ul>
  );
}
