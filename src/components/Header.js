import React from "react";
import { Link } from "react-router-dom";

import style from "./header.module.css";

//images
// import logo from "../images/logo.jpg";

export default function Header() {
  return (
    <div className={`${style.header} has-background-success`}>
      <h1 className="is-size-2 has-text-weight-semibold">Student Hub</h1>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>
    </div>
  );
}
