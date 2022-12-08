import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Navbar from "../../component/navbar/Navbar";

//m8urlyzp
const initialState = {
  title: "",
  description: "",
  category: "",
  imageUrl: "",
};
const options = ["Travel", "Fashion", "Fitness", "sports", "Food", "Tech"];

function AddEditBlog() {
  const [formValue, setFormValue] = useState(initialState);
  const [categoryErrmsg, setCategoryErrMsg] = useState(null);
  const { title, description, category, imageUrl } = formValue;

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Navbar />
      <form action="" className="editform" onClick={handleSubmit}>
        <p>Add a new blog</p>
      </form>
    </div>
  );
}
export default AddEditBlog;
