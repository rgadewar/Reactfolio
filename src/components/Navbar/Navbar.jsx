import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";

function Navbar(props) {
  return (
    <div className="flexbox-container">
      <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" id="RUPAG">
            RupaG
          </Link>

          <div className="navbar-nav ml-auto">
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/portfolio">
              Portfolio
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
            <Link className="nav-link" to="/resume">
              Resume
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
