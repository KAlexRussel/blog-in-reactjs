import React from "react";
import blog from "../../image/blog.png";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="brand-title">
          <a href="/">
            <div className="icon">
              <img src={blog} width="30px" alt="logo" />
              <h2 className="logo">E-Gucci</h2>
            </div>
          </a>
        </div>
        <div href="#" className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className="navbar-links">
          <ul>
            <li className="nav-link">
              <a href="/">HOME</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
