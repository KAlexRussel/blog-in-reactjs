import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthProvider";
// import { useNavigate, useParams } from "react-router-dom";
import { Paper } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

import "./login.css";
import Logo from "../../component/logo/Logo";
const initialState = {
  username: "",
  password: "",
};
const Login = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { username, password } = formValue;
  const userRef = useRef();
  const errRef = useRef();
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [eye, setEye] = useState(false);
  const { setAuth } = useContext(AuthContext);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    try {
      const updateBlogData = { ...formValue };
      console.log(updateBlogData);
      const response = axios
        .post("http://localhost:3006/Signup", updateBlogData)
        .then((resp) => {
          toast.success("Registered   Successfully");
          console.log("Response", resp);

          setFormValue({
            ...formValue,
            username: "",
            password: "",
          });
          // navigate("/login");
        })
        .catch((err) => {
          toast.error("something went wrong");
          console.log("something when wrong");
        });
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ username, password, roles, accessToken });
      // setUser("");
      // setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

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
  //         // navigate("/home");
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

  return (
    <>
      <Logo />
      {success ? (
        <section>
          <h1>your are logged in!</h1>
          <br />
          <p>
            <a href="/home"> go to home</a>
          </p>
        </section>
      ) : (
        <div className="editwrap">
          <Paper elevation={3} className="loginform">
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <form onSubmit={handleSubmit}>
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
                        ref={userRef}
                        value={username || ""}
                        name="username"
                        autoComplete="off"
                        onChange={onInputChange}
                        label="Title"
                        placeholder="Enter your user name"
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
                    <div className="pasword">
                      <input
                        className="title2"
                        type="password"
                        id="password"
                        ref={userRef}
                        autoComplete="off"
                        value={password || ""}
                        name="password"
                        onChange={onInputChange}
                        label="Title"
                        placeholder="Enter your  password"
                        required
                        // validation="Please provide a title"
                        invalid="true"
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

                    {/* <br /> */}
                  </div>

                  <div className="btnn">
                    <button type="submit" className="signbut">
                      Sign In
                    </button>
                  </div>
                  <div>
                    <p>
                      Need an Account?{" "}
                      <a href="/signup">
                        <strong>Sign Up</strong>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </Paper>
        </div>
      )}
    </>
  );
};

export default Login;
