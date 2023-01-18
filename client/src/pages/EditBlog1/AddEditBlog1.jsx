import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
// import Navbar from "../../component/navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { Paper } from "@mui/material";
import useAxiosFetch from "../../hooks/useAxiosFetch";

import "./editblog.css";
import { useEffect } from "react";
import Picu from "../../component/Picu/Picu";
import Logo from "../../component/logo/Logo";
// import Navbar from "../../component/navbar/Navbar";

//m8urlyzp
const initialState = {
  title: "",
  description: "",
  category: "",
  imageUrl: "",
};
const options = ["Travel", "Fashion", "Fitness", "sports", "Food", "Tech"];

function AddEditBlog1() {
  const [data, setData] = useState([]);
  const [formValue, setFormValue] = useState(initialState);
  const [categoryErrmsg, setCategoryErrMsg] = useState(null);
  // const [editMode, setEditMode] = useState(false);
  const { title, description, category, imageUrl } = formValue;
  const { id } = useParams();
  const { datas } = useAxiosFetch(`http://localhost:3006/blogs/${id}`);

  useEffect(() => {
    setData(datas);
  }, [datas]);

  // setFormValue(datas);

  const navigate = useNavigate();
  // const { id } = useParams();

  // useEffect(() => {
  //   if (id) {
  //     // let blog = blog.find((blog) => blog.id === parseInt(id));
  //     getSingelBlog();
  //   }
  // }, [id]);

  // const getSingelBlog = async () => {
  //   const singleBlog = await axios.get(`http://localhost:3006/blogs/${id}`);
  //   if (singleBlog.status === 200) {
  //     // toast.success("information receive succedfully");
  //     setData(singleBlog.data);
  //     console.log("everything goog");
  //   } else {
  //     toast.error("something when wrong");
  //     console.log("something when wrong");
  //   }
  // };

  // const navigate = useNavigate();
  // const { id } = useParams();

  useEffect(() => {
    // setEditMode(true);
    // getsingelBlog(id);
    setFormValue(datas);
  }, [datas]);
  // const getsingelBlog = async (id) => {
  //   const singleBlog = await axios.get(`http://localhost:3006/blogs/${id}`);
  //   if (singleBlog.status === 200) {
  //     setFormValue({ ...singleBlog.data });
  //     setData(datas);
  //   } else {
  //     toast.error("something when wrong");
  //   }
  // };

  // const getDate = () => {
  //   let today = new Date();
  //   let dd = String(today.getDate()).padStart(2, "0");
  //   let mm = String(today.getMonth() + 1).padStart(2, "0"); //
  //   let yyyy = today.getFullYear();

  //   today = mm + "/home" + dd + "/home" + yyyy;

  //   return today;
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!category) {
      setCategoryErrMsg("please select a category");
    }
    // const imageValidation = !editMode ? imageUrl : true;
    if (title && description && category && imageUrl) {
      // const currentDate = getDate();
      // if (!editMode) {
      //   const updateBlogData = { ...formValue, date: currentDate };
      //   console.log(updateBlogData);
      //   await axios
      //     .post("http://localhost:3006/blogs", updateBlogData)
      //     .then((resp) => {
      //       toast.success("Blog Created Successfully");
      //       console.log("Response", resp);

      //       setFormValue({
      //         ...formValue,
      //         title: "",
      //         description: "",
      //         category: "",
      //         imageUrl: "",
      //       });
      //       navigate("/home");
      //     })
      //     .catch((err) => {
      //       toast.error("something went wrong");
      //       console.log("something when wrong");
      //     });
      // } else {
      await axios
        .put(`http://localhost:3006/blogs/${id}`, formValue)
        .then((resp) => {
          toast.success("Blog updated Successfully");
          console.log("Response", resp);
          setFormValue({
            ...formValue,
            title: "",
            description: "",
            category: "",
            imageUrl: "",
          });
          navigate("/home");
        })
        .catch((err) => {
          // toast.error("something went wrong");
          console.log("something when wrong");
        });
      // }

      // console.log(response);
      // if (response.status === 201) {
      //   toast.success("Blog Created Successfully");
      // } else {
      //   toast.error("something when wrong");
      // }

      // setFormValue({ title: "", description: "", category: "", imageUrl: "" });
      // navigate("/home");
    }
  };
  const convertBase64 = (file) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      // resolve(fileReader.result);
      // console.log(fileReader.result);
      console.log("converted succesully");
      const imgString = fileReader.result;
      // // return imgString;
      // console.log(imgString);
      setFormValue({ ...formValue, imageUrl: imgString });
      console.log(imageUrl);
    };
    fileReader.onerror = (error) => {
      // reject(error);
      console.log("Error:", error);
    };
  };
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const onUploadImage = (e) => {
    const file = e.target.files[0];
    console.log("file", file);
    convertBase64(file);

    // const base64 = convertBase64(files);
    // console.log(base64);
    // setFormValue({ ...formValue, imageUrl: base64 });
    // const formData = new FormData();

    // formData.append("upload_preset", "m8urlyzp");
    // formData.append("file", files);

    // axios
    //   .post("https://api.cloudinary.com/v1_1/dmszaahd1/image/upload", formData)
    //   .then((resp) => {
    //     toast.success("image uploaded succesfully", {
    //       closeOnClick: false,
    //       closeButton: false,
    //       autoClose: 3000,
    //       // className: style.toast_success,
    //     });
    //     setFormValue({ ...formValue, imageUrl: resp.data.secure_url });
    //     console.log("Response", resp);
    //   })
    //   .catch((err) => {
    //     toast.error("something went wrong");
    //     console.log("something when wrong");
    //   });
  };

  const onCategoryChange = (e) => {
    setCategoryErrMsg(null);
    setFormValue({ ...formValue, category: e.target.value });
  };
  return (
    <>
      <Logo />

      <div className="editwrap">
        {/* <Navbar /> */}
        <Paper elevation={3} className="editform">
          <form action="" onSubmit={handleSubmit} noValidate>
            <p className="headerww">Upadate Blog</p>
            <div>
              <div>
                <div>
                  <label htmlFor="fname">Title:</label>
                </div>
                <div>
                  <input
                    className="title2"
                    type="text"
                    value={title || ""}
                    name="title"
                    autoComplete="off"
                    onChange={onInputChange}
                    label="Title"
                    placeholder="Title"
                    required
                    validation="Please provide a title"
                    invalid="true"
                  />
                </div>
              </div>

              <br />
              <div className="input2">
                <label htmlFor="fname">Description:</label>
                <textarea
                  className="textinput"
                  type="text"
                  value={description || ""}
                  name="description"
                  autoComplete="off"
                  onChange={onInputChange}
                  label="Description"
                  placeholder="Enter the Description"
                  required
                  validation="Please provide a Description"
                  textarea="true"
                  rows={4}
                  invalid="true"
                />

                <br />
              </div>
              {/* <Picu blog={data} /> */}

              <>
                <div className="input2">
                  <div>
                    <label htmlFor="fname">Upload An Image:</label>
                    <br />
                  </div>

                  <Picu blog={data} />

                  <div>
                    <input
                      className="imageupload"
                      type="file"
                      onChange={onUploadImage}
                      required
                      validation="Please provide an image"
                      invalid="true"
                    />
                  </div>

                  <br />
                </div>
              </>

              <div className="input2">
                <div>
                  <label htmlFor="fname">Select a category:</label>
                </div>
                <div>
                  <select
                    className="categorydropdown"
                    onChange={onCategoryChange}
                    value={category}
                  >
                    <option>please select category</option>
                    {options.map((option, index) => (
                      <option value={option || ""} key={index}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {categoryErrmsg && (
                <div className="categoryerrormsg">{categoryErrmsg} </div>
              )}
              <br />
              {/* <br /> */}
              <div className="btm">
                <button type="submit" className="submitbut signut">
                  {" "}
                  UPDATE
                </button>
                <button
                  className="gobackbtn signut"
                  onClick={() => navigate(`/blog/${id}`)}
                >
                  go back
                </button>
              </div>
            </div>
          </form>
        </Paper>
      </div>
    </>
  );
}
export default AddEditBlog1;
