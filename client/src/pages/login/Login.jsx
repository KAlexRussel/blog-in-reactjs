import React from "react";
import { useRef, useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
import { Paper } from "@mui/material";
// import axios from "axios";
// import { toast } from "react-toastify";

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

  useEffect(() => {
    // userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [username, password]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    setSuccess(true);
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
    <>
      <Logo />
      {success ? (
        <section>
          <h1>your are logged in!</h1>
          <br />
          <p>
            <a href="/"> go to home</a>
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
                        value={username || ""}
                        name="username"
                        onChange={onInputChange}
                        label="Title"
                        placeholder="Enter the user name"
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
