import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
class Header extends Component {
  render() {
    return (
      <nav className="z-depth-0">
        <div className="nav-wrapper">
          <Link
            to="/"
            className="left brand-logo"
            style={{ left: "0px", color: "black" }}
          >
            Custom URL Shortener
          </Link>
        </div>
      </nav>
    );
  }
}

export default Header;
