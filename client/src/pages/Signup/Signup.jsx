import React from "react";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";
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
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PHONE_REGEX = /^\d{9}$/;

const Signup = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { username, password, telephone, email, confirmpassword } = formValue;
  const userRef = useRef();
  // const errRef = useRef();
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [validPhone, setValidPhone] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);

  const [eye, setEye] = useState(false);
  const [eye1, setEye1] = useState(false);

  const navigate = useNavigate();
  // const useRef = useRef();

  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setValidName(USER_REGEX.test(username));
  }, [username]);
  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);
  useEffect(() => {
    setValidPhone(PHONE_REGEX.test(telephone));
  }, [telephone]);
  useEffect(() => {
    setValidPwd(PWD_REGEX.test(password));
    setValidMatch(password === confirmpassword);
  }, [password, confirmpassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(username);
    const v2 = PWD_REGEX.test(password);
    const v3 = EMAIL_REGEX.test(email);
    const v4 = PHONE_REGEX.test(telephone);

    // const imageValidation = !editMode ? imageUrl : true;
    if (!v2 || !v1 || !v3 | !v4) {
      toast.error("invalid entry");
      return;
    }
    try {
      // const currentDate = getDate();
      //axios is use perfome the crud operations
      const updateBlogData = { ...formValue };
      console.log(updateBlogData);
      await axios
        .post("http://localhost:3006/Signup", updateBlogData)
        .then((resp) => {
          toast.success("Registered   Successfully");
          console.log("Response", resp);

          setFormValue({
            ...formValue,
            username: "",
            password: "",
          });
          navigate("/");
        })
        .catch((err) => {
          toast.error("something went wrong");
          console.log("something when wrong");
        });
    } catch (err) {
      if (!err?.response) {
        toast.error("No Server Response");
      } else if (err.response?.status === 409) {
        toast.error("Username Taken");
      } else {
        toast.error("Registration Failed");
      }
    }

    // console.log(response);
  };

  const onInputChange = (e) => {
    let { name, value } = e.target;

    setFormValue({ ...formValue, [name]: value });
  };

  const showHidePassword = (e) => {
    e.preventDefault();

    const x = document.getElementById("password");

    if (x.type === "password") {
      x.type = "text";
      setEye(true);
    } else {
      x.type = "password";
      setEye(false);
    }
  };
  const showHidePassword1 = (e) => {
    e.preventDefault();

    const x = document.getElementById("password1");

    if (x.type === "password") {
      x.type = "text";
      setEye1(true);
    } else {
      x.type = "password";
      setEye1(false);
    }
  };
  return (
    <>
      {/* <div>
        <Link to="/home">go back</Link>
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
                    <label htmlFor="fname">
                      Username:*
                      <i
                        className={
                          validName ? "fa fa-check valid" : "fa fa-check hide"
                        }
                        aria-hidden="true"
                      ></i>
                      <i
                        className={
                          validName || !username
                            ? "fa fa-times hide"
                            : "fa fa-times invalid"
                        }
                        aria-hidden="true"
                      ></i>
                    </label>
                  </div>
                  <div>
                    <input
                      className="title2"
                      type="text"
                      ref={userRef}
                      autoComplete="off"
                      value={username || ""}
                      name="username"
                      onChange={onInputChange}
                      label="Title"
                      placeholder="Enter your username"
                      required
                      // validation="Please provide a title"
                      invalid="true"
                      aria-invalid={validName ? "false" : "true"}
                      aria-describedby="uidnote"
                      onFocus={() => setUserFocus(true)}
                      onBlur={() => setUserFocus(false)}
                    />
                  </div>
                  <p
                    id="uidnote"
                    className={
                      userFocus && username && !validName
                        ? "instructions"
                        : "offscreen"
                    }
                  >
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                    4 to 24 characters.
                    <br />
                    Must begin with a letter.
                    <br />
                    Letters, numbers, underscores, hyphens allowed.
                  </p>
                </div>
                <div className="">
                  <div>
                    <label htmlFor="fname">
                      Password:*
                      <i
                        className={
                          validPwd ? "fa fa-check valid" : "fa fa-check hide"
                        }
                        aria-hidden="true"
                      ></i>
                      <i
                        className={
                          validPwd || !password
                            ? "fa fa-times hide"
                            : "fa fa-times invalid"
                        }
                        aria-hidden="true"
                      ></i>
                    </label>
                  </div>
                  <div className="pasword">
                    <input
                      className="pasword1"
                      type="password"
                      id="password"
                      ref={userRef}
                      autoComplete="off"
                      value={password || ""}
                      name="password"
                      onChange={onInputChange}
                      label="Title"
                      placeholder="Enter your password"
                      required
                      // validation="Please provide a title"
                      aria-describedby="pwdnote"
                      onFocus={() => setPwdFocus(true)}
                      onBlur={() => setPwdFocus(false)}
                    />
                    <button onClick={showHidePassword} className="togglerp">
                      <i
                        className={
                          eye && password ? "fa fa-eye" : "fa fa-eye-slash"
                        }
                        aria-hidden="true"
                      ></i>
                    </button>
                  </div>
                  <p
                    id="pwdnote"
                    className={
                      pwdFocus && !validPwd && password
                        ? "instructions"
                        : "offscreen"
                    }
                  >
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                    8 to 24 characters.
                    <br />
                    Must include uppercase and lowercase letters, a number and a
                    special character.
                    <br />
                    Allowed special characters:{" "}
                    <span aria-label="exclamation mark">!</span>{" "}
                    <span aria-label="at symbol">@</span>{" "}
                    <span aria-label="hashtag">#</span>{" "}
                    <span aria-label="dollar sign">$</span>{" "}
                    <span aria-label="percent">%</span>
                  </p>
                </div>
                <div className="">
                  <div>
                    <label htmlFor="fname">
                      Confrim Password:*
                      <i
                        className={
                          validMatch && confirmpassword
                            ? "fa fa-check valid"
                            : "fa fa-check hide"
                        }
                        aria-hidden="true"
                      ></i>
                      <i
                        className={
                          validMatch || !confirmpassword
                            ? "fa fa-times hide"
                            : "fa fa-times invalid"
                        }
                        aria-hidden="true"
                      ></i>
                    </label>
                  </div>
                  <div className="pasword">
                    <input
                      className="title2"
                      type="password"
                      id="password1"
                      ref={userRef}
                      autoComplete="off"
                      value={confirmpassword || ""}
                      name="confirmpassword"
                      onChange={onInputChange}
                      label="password"
                      placeholder="Enter your password"
                      required
                      // validation="Please provide a title"
                      aria-describedby="confirmnote"
                      onFocus={() => setMatchFocus(true)}
                      onBlur={() => setMatchFocus(false)}
                    />

                    <button onClick={showHidePassword1} className="togglerp">
                      <i
                        className={
                          eye1 && confirmpassword
                            ? "fa fa-eye"
                            : "fa fa-eye-slash"
                        }
                        aria-hidden="true"
                      ></i>
                    </button>
                  </div>
                  <p
                    id="confirmnote"
                    className={
                      matchFocus && !validMatch ? "instructions" : "offscreen"
                    }
                  >
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                    Must match the first password input field.
                  </p>
                </div>
                <div className="">
                  <div>
                    <label htmlFor="fname">
                      Email:*
                      <i
                        className={
                          validEmail ? "fa fa-check valid" : "fa fa-check hide"
                        }
                        aria-hidden="true"
                      ></i>
                      <i
                        className={
                          validEmail || !email
                            ? "fa fa-times hide"
                            : "fa fa-times invalid"
                        }
                        aria-hidden="true"
                      ></i>
                    </label>
                  </div>
                  <div>
                    <input
                      className="title2"
                      type="email"
                      ref={userRef}
                      autoComplete="off"
                      value={email || ""}
                      name="email"
                      onChange={onInputChange}
                      label="Title"
                      placeholder="Enter your email"
                      required
                      // validation="Please provide a title"
                      aria-describedby="emailnote"
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                    />
                  </div>
                  <p
                    id="emailnote"
                    className={
                      emailFocus && !validEmail && email
                        ? "instructions"
                        : "offscreen"
                    }
                  >
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                    Your Email must contain the @ character.
                  </p>
                </div>
                <div className="">
                  <div>
                    <label htmlFor="fname">
                      Phone Number:*
                      <i
                        className={
                          validPhone ? "fa fa-check valid" : "fa fa-check hide"
                        }
                        aria-hidden="true"
                      ></i>
                      <i
                        className={
                          validPhone || !telephone
                            ? "fa fa-times hide"
                            : "fa fa-times invalid"
                        }
                        aria-hidden="true"
                      ></i>
                    </label>
                  </div>
                  <div>
                    <input
                      className="title2"
                      type="tel"
                      ref={userRef}
                      autoComplete="off"
                      value={telephone || ""}
                      name="telephone"
                      onChange={onInputChange}
                      label="Title"
                      placeholder="Enter the telephone number"
                      required
                      aria-describedby="phonenote"
                      onFocus={() => setPhoneFocus(true)}
                      onBlur={() => setPhoneFocus(false)}
                    />
                  </div>
                  <p
                    id="phonenote"
                    className={
                      phoneFocus && !validPhone && telephone
                        ? "instructions"
                        : "offscreen"
                    }
                  >
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                    IT should be exactly 10 digit. NO letters is accepted only
                    digit
                  </p>
                  {/* 
                  <br /> */}
                </div>

                <div className="btnn">
                  <button
                    type="submit"
                    className="signbut"
                    disabled={!validName ? true : false}
                  >
                    Sign Up
                  </button>
                </div>
                <div>
                  <p>
                    have already an Account?{" "}
                    <a href="/">
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
