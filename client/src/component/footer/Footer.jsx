import React from "react";

import "./footer.css";

function Footer() {
  return (
    <div>
      <hr />
      <div className="footer-1">
        <div className="foot">
          <div className="grp">
            <h3>Contact</h3>
            <p>MySpace@gmail.com</p>
            <div className="socials">
              <span className="css-118najv">
                {" "}
                <i className="fa-brands fa-linkedin"></i>{" "}
              </span>
              <span className="css-118najv">
                {" "}
                <i className="fa-brands fa-instagram"></i>{" "}
              </span>
              <span className="css-118najv">
                {" "}
                <i className="fa-brands fa-facebook"></i>{" "}
              </span>
              <span className="css-118najv">
                {" "}
                <i className="fa-brands fa-youtube"></i>{" "}
              </span>
              <span className="css-118najv">
                <i className="fa-brands fa-twitter"></i>{" "}
              </span>

              <span className="css-118najv">
                {" "}
                <i className="fa-brands fa-github"></i>{" "}
              </span>
            </div>
          </div>

          <div className="grp">
            <h3>SHOP</h3>
            <p>My Account</p>
            <p>Terms and conditions</p>
            <p>SReturns</p>
            <p>FAQs</p>
          </div>
          <div className="grp">
            <h3>COMPANY</h3>
            <p>About us</p>
            <p>jobs</p>
            <p>Services</p>
            <p>contact</p>
          </div>

          <div className="grp">
            <h3>SECTIONS</h3>
            <p>Design</p>
            <p>Culture</p>
            <p>Sneakers</p>
            <p>Style</p>
          </div>

          <div className="grp">
            <h3>MORE</h3>
            <p>Print Magazine</p>
            <p>News Letter</p>
            <p>Archive</p>
            <p>Style</p>
          </div>
        </div>
        <hr />
        <div className="end">
          <p>
            <i className="fa-solid fa-copyright"></i> 2022 KuavoDesign
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
