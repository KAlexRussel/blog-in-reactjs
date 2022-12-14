import React from "react";
import { useState } from "react";

import "./navbar.css";

function Navbar() {
  const [Mobile, setMobile] = useState(true);
  // const navref = useRef();
  // navref.current.classlist.toggle("responsiveness-nav");
  // const toggleButton = document.getElementsByClassName("toggle-button")[0];
  // const navbarLinks = document.getElementsByClassName("navbar-links")[0];

  // toggleButton.addEventListener("click", () => {
  //   navbarLinks.classList.toggle("active");
  // });

  return (
    <div>
      <nav className="navbar">
        <div
          className={Mobile ? "navbar-links" : "navbar-links-mobile"}
          onClick={() => setMobile(false)}
        >
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
        <div className="toggle-button" onClick={() => setMobile(!Mobile)}>
          {Mobile ? (
            <i className="fa-solid fa-bars"></i>
          ) : (
            <i className="fa-solid fa-xmark"></i>
          )}
        </div>
      </nav>
      <hr />
    </div>
  );
}

export default Navbar;
