import React from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar">
    <ul>
      <li className="brand">
        <a href="/">Clicky Game</a>
      </li>
      <li>
        {/* this is space for the message */}
        {"Good Luck"}
      </li>
      <li>
        Score: {props.score} | Top Score: {props.topScore}
      </li>
    </ul>
  </nav>
);

export default Navbar;
