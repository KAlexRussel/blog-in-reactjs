import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
// import Navbar from "../../component/navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { Paper } from "@mui/material";

import "./editblog.css";
import { useEffect } from "react";
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
  const [formValue, setFormValue] = useState(initialState);
  const [categoryErrmsg, setCategoryErrMsg] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const { title, description, category, imageUrl } = formValue;

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setEditMode(true);
      getsingelBlog(id);
    } else {
      setEditMode(false);
      setFormValue(...initialState);
    }
  }, [id]);
  const getsingelBlog = async (id) => {
    const singleBlog = await axios.get(`http://localhost:3006/blogs/${id}`);
    if (singleBlog.status === 200) {
      setFormValue({ ...singleBlog.data });
    } else {
      toast.error("something when wrong");
    }
  };

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

    if (!category) {
      setCategoryErrMsg("please select a category");
    }
    // const imageValidation = !editMode ? imageUrl : true;
    if (title && description && category && imageUrl) {
      const currentDate = getDate();
      if (!editMode) {
        const updateBlogData = { ...formValue, date: currentDate };
        console.log(updateBlogData);
        await axios
          .post("http://localhost:3006/blogs", updateBlogData)
          .then((resp) => {
            toast.success("Blog Created Successfully");
            console.log("Response", resp);

            setFormValue({
              ...formValue,
              title: "",
              description: "",
              category: "",
              imageUrl: "",
            });
            navigate("/");
          })
          .catch((err) => {
            toast.error("something went wrong");
            console.log("something when wrong");
          });
      } else {
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
            navigate("/");
          })
          .catch((err) => {
            // toast.error("something went wrong");
            console.log("something when wrong");
          });
      }

      // console.log(response);
      // if (response.status === 201) {
      //   toast.success("Blog Created Successfully");
      // } else {
      //   toast.error("something when wrong");
      // }

      // setFormValue({ title: "", description: "", category: "", imageUrl: "" });
      // navigate("/");
    }
  };
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const onUploadImage = (e) => {
    const files = e.target.files[0];
    console.log("file", files);
    // const base64 = convertBase64(files);
    // console.log(base64);
    // setFormValue({ ...formValue, imageUrl: base64 });
    const formData = new FormData();

    formData.append("upload_preset", "m8urlyzp");
    formData.append("file", files);

    axios
      .post("https://api.cloudinary.com/v1_1/dmszaahd1/image/upload", formData)
      .then((resp) => {
        toast.success("image uploaded succesfully", {
          closeOnClick: false,
          closeButton: false,
          autoClose: 3000,
          // className: style.toast_success,
        });
        setFormValue({ ...formValue, imageUrl: resp.data.secure_url });
        console.log("Response", resp);
      })
      .catch((err) => {
        toast.error("something went wrong");
        console.log("something when wrong");
      });
  };
  //converting an image to a string
  // const convertBase64 = (files) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(files);

  //     fileReader.onload= () => {
  //       resolve(fileReader.result);
  //     };
  //     fileReader.onerror= error => {
  //       reject(error);
  //     };
  //   });
  // };
  const onCategoryChange = (e) => {
    setCategoryErrMsg(null);
    setFormValue({ ...formValue, category: e.target.value });
  };
  return (
    <>
      <div className="editwrap">
        {/* <Navbar /> */}
        <Paper elevation={3} className="editform">
          <form action="" onSubmit={handleSubmit} noValidate>
            <p className="headerww">{editMode ? "Upadate Blog" : "ADD blog"}</p>
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
              {editMode && (
                <>
                  <div className="input2">
                    <div>
                      <label htmlFor="fname">Upload An Image:</label>
                    </div>

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
              )}
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
              <br />
              <div className="btm">
                <button type="submit" className="submitbut">
                  {" "}
                  UPDATE
                </button>
                <button className="gobackbtn" onClick={() => navigate("/")}>
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
