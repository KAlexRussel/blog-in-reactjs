import React from "react";
import Footer from "../../component/footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import "./contact.css";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="head">
        <h3>CONTACT</h3>
      </div>
      <div className="main-con">
        <div className="parag">
          <p>
            If you have a product/brand that you think fits well on my website
            and want to advertise it, contact me. All of my posts are very well
            thought out and designed to engage with the reader and always
            contain a captivating story with carefully planned and executed
            imagery. If you're interested, ask me and I will send you my Media
            Kit with more info.
          </p>
        </div>
        <div className="vl"></div>
        <div className="contact-1">
          <h3>EMAIL //</h3>
          <p>Kuavo12alex@gmail.com</p>
        </div>
      </div>
      <div></div>
      <Footer />
    </div>
  );
}
export default Contact;
