import React from "react";

import "./navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className="navbar-links">
          <ul>
            <li className="nav-link">
              <a href="/">HOME</a>
            </li>
            <li className="nav-link">
              <a href="/blog">BLOG</a>
            </li>
            <li className="nav-link">
              <a href="/about">ABOUT</a>
            </li>
            <li className="nav-link">
              <a href="/contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>
      <hr />
    </div>
  );
}

export default Navbar;
