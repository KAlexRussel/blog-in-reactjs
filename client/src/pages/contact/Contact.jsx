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
      <div>
        <form action="Post">
          <div className="form-1">
            <div className="form-11">
              <input
                className="form-control"
                name="name"
                type="text"
                placeholder="NAME"
                required=""
                value=""
              />
              <input
                className="form-control"
                name="email"
                type="email"
                placeholder="EMAIL"
                required=""
                value=""
              />
            </div>
            <div className="form-11">
              <input
                className="form-control"
                name="name"
                type="text"
                placeholder="LASTNAME"
                required=""
                value=""
              />
              <input
                className="form-control"
                name="phone"
                type="number"
                placeholder="PHONE NUMBER "
                required=""
                value=""
              />
            </div>
          </div>
          <div className="form-12">
            <textarea
              class="form-control1"
              placeholder="LEAVE YOUR MESSAGE HERE"
              required=""
            ></textarea>
            <button className="button2">SEND</button>
          </div>
        </form>
      </div>
      <div className="main-con">
        {/* <div className="parag">
          <p>
            If you have a product/brand that you think fits well on my website
            and want to advertise it, contact me. All of my posts are very well
            thought out and designed to engage with the reader and always
            contain a captivating story with carefully planned and executed
            imagery. If you're interested, ask me and I will send you my Media
            Kit with more info.
          </p>
        </div> */}
        {/* <div className="vls"></div> */}
        <div className="cont">
          <div className="contact-1">
            <h3>EMAIL:</h3>
            <p>Kuavo12alex@gmail.com</p>
          </div>
          <div className="contact-1">
            <h3>Telephone:</h3>
            <p>680675850</p>
          </div>
          <div className="contact-1">
            <h3>City:</h3>
            <p>chicago</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Contact;
