import React from "react";
import Footer from "../../component/footer/Footer";
import Logo from "../../component/logo/Logo";
import Navbar from "../../component/navbar/Navbar";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
// import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./contact.css";

const initialState = {
  name: "",
  lastname: "",
  email: "",
  telephone: "",
  message: "",
};
function Contact() {
  const [formValue, setFormValue] = useState(initialState);
  const { name, lastname, email, telephone, message } = formValue;

  const navigate = useNavigate();

  const getDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //
    let yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;

    return today;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const imageValidation = !editMode ? imageUrl : true;
    if (name && lastname && email && telephone && message) {
      const currentDate = getDate();

      const updateBlogData = { ...formValue, date: currentDate };
      console.log(updateBlogData);
      const response = await axios
        .post("http://localhost:3006/contact", updateBlogData)
        .then((resp) => {
          toast.success("Message sent Successfully");
          console.log("Response", resp);

          setFormValue({
            ...formValue,
            name: "",
            lastname: "",
            email: "",
            telephone: "",
            message: "",
          });
          navigate("/");
        })
        .catch((err) => {
          toast.error("something went wrong");
          console.log("something when wrong");
        });

      console.log(response);
    }
  };
  const onInputChange = (e) => {
    let { name, value } = e.target;

    setFormValue({ ...formValue, [name]: value });
  };
  return (
    <div>
      <Navbar />
      <Logo />
      <div className="head">
        <h3>CONTACT</h3>
      </div>
      <div>
        <form action="Post" onSubmit={handleSubmit}>
          <div className="form-1">
            <div className="form-11">
              <input
                className="form-control"
                name="name"
                type="text"
                placeholder="NAME"
                required
                value={name || ""}
                onChange={onInputChange}
              />
              <input
                className="form-control"
                name="email"
                type="email"
                placeholder="EMAIL"
                required
                value={email || ""}
                onChange={onInputChange}
              />
            </div>
            <div className="form-11">
              <input
                className="form-control"
                name="lastname"
                type="text"
                placeholder="LASTNAME"
                required
                value={lastname || ""}
                onChange={onInputChange}
              />
              <input
                className="form-control"
                name="telephone"
                type="number"
                placeholder="PHONE NUMBER "
                required
                value={telephone || ""}
                onChange={onInputChange}
              />
            </div>
          </div>
          <div className="form-12">
            <textarea
              name="message"
              className="form-control1"
              placeholder="LEAVE YOUR MESSAGE HERE"
              required
              value={message || ""}
              onChange={onInputChange}
            ></textarea>
            <button type="submit" className="button2">
              SEND
            </button>
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
