import React from "react";
// import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Paper } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
// import { Link } from "react-router-dom";

import "./signup.css";
import Logo from "../../component/logo/Logo";
const initialState = {
  username: "",
  password: "",
  telephone: "",
  email: "",
  confirmpassword: "",
};
const Signup = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { username, password, telephone, email, confirmpassword } = formValue;
  const navigate = useNavigate();
  // const useRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const imageValidation = !editMode ? imageUrl : true;
    if (username && password) {
      // const currentDate = getDate();
      //axios is use perfome the crud operations
      const updateBlogData = { ...formValue };
      console.log(updateBlogData);
      const response = await axios
        .post("http://localhost:3006/Signup", updateBlogData)
        .then((resp) => {
          toast.success("Reistered   Successfully");
          console.log("Response", resp);

          setFormValue({
            ...formValue,
            username: "",
            password: "",
          });
          navigate("/login");
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
    <>
      {/* <div>
        <Link to="/">go back</Link>
      </div> */}
      <Logo />
      <div className="editwrap">
        <Paper elevation={3} className="loginform">
          <form onSubmit={handleSubmit}>
            <div>
              <p className="headerww">Sign Up</p>
              <div>
                <div className="">
                  <div>
                    <label htmlFor="fname">Username:*</label>
                  </div>
                  <div>
                    <input
                      className="title2"
                      type="text"
                      value={username || ""}
                      name="username"
                      onChange={onInputChange}
                      label="Title"
                      placeholder="Enter your username"
                      required
                      // validation="Please provide a title"
                      invalid="true"
                    />
                  </div>
                </div>
                <div className="">
                  <div>
                    <label htmlFor="fname">Password:*</label>
                  </div>
                  <div>
                    <input
                      className="title2"
                      type="password"
                      value={password || ""}
                      name="password"
                      onChange={onInputChange}
                      label="Title"
                      placeholder="Enter your password"
                      required
                      // validation="Please provide a title"
                      invalid="true"
                    />
                  </div>
                </div>
                <div className="">
                  <div>
                    <label htmlFor="fname">Confrim Password:*</label>
                  </div>
                  <div>
                    <input
                      className="title2"
                      type="password"
                      value={confirmpassword || ""}
                      name="confirmpassword"
                      onChange={onInputChange}
                      label="password"
                      placeholder="Enter your password"
                      required
                      // validation="Please provide a title"
                      invalid="true"
                    />
                  </div>
                </div>
                <div className="">
                  <div>
                    <label htmlFor="fname">Email:*</label>
                  </div>
                  <div>
                    <input
                      className="title2"
                      type="email"
                      value={email || ""}
                      name="email"
                      onChange={onInputChange}
                      label="Title"
                      placeholder="Enter your email"
                      required
                      // validation="Please provide a title"
                      invalid="true"
                    />
                  </div>
                </div>
                <div className="">
                  <div>
                    <label htmlFor="fname">Telephone:*</label>
                  </div>
                  <div>
                    <input
                      className="title2"
                      type="number"
                      value={telephone || ""}
                      name="telephone"
                      onChange={onInputChange}
                      label="Title"
                      placeholder="Enter the telephone number"
                      required
                      // validation="Please provide a title"
                      invalid="true"
                    />
                  </div>

                  <br />
                </div>

                <div className="btnn">
                  <button type="submit" className="signbut">
                    Sign Up
                  </button>
                </div>
                <div>
                  <p>
                    have already an Account?{" "}
                    <a href="/login">
                      <strong>Sign In</strong>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </Paper>
      </div>
    </>
  );
};

export default Signup;
