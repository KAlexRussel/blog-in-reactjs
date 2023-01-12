import React from "react";
// import { useRef, useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Paper } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

import "./login.css";
const initialState = {
  username: "",
  password: "",
};
const Login = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { username, password } = formValue;
  // const useRef = useRef();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // const imageValidation = !editMode ? imageUrl : true;
  //   if (username && password) {
  //     // const currentDate = getDate();
  //     //axios is use perfome the crud operations
  //     const updateBlogData = { ...formValue };
  //     console.log(updateBlogData);
  //     const response = await axios
  //       .post("http://localhost:3006/Login", updateBlogData)
  //       .then((resp) => {
  //         toast.success("Message sent Successfully");
  //         console.log("Response", resp);

  //         setFormValue({
  //           ...formValue,
  //           username: "",
  //           password: "",
  //         });
  //         // navigate("/");
  //       })
  //       .catch((err) => {
  //         toast.error("something went wrong");
  //         console.log("something when wrong");
  //       });

  //     console.log(response);
  //   }
  // };

  const onInputChange = (e) => {
    let { name, value } = e.target;

    setFormValue({ ...formValue, [name]: value });
  };
  return (
    <div className="editwrap">
      <Paper elevation={3} className="loginform">
        <form action="">
          <div>
            <p className="headerww">Sign In</p>
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
                    name="title"
                    onChange={onInputChange}
                    label="Title"
                    placeholder="Enter the user name"
                    required
                    // validation="Please provide a title"
                    invalid="true"
                  />
                </div>

                <br />
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
                    placeholder="Enter the password"
                    required
                    // validation="Please provide a title"
                    invalid="true"
                  />
                </div>

                <br />
              </div>

              <div className="btnn">
                <button type="submit" className="signbut">
                  Sign In
                </button>
              </div>
              <div>
                <p>
                  Need an Account? <a href="/">Sign Up</a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </Paper>
    </div>
  );
};

export default Login;
