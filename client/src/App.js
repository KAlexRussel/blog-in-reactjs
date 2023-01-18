import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage/Home";

import "react-toastify/dist/ReactToastify.min.css";
import "./App.css";
import Blog from "./pages/Blogs/Blog";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Notfound from "./pages/Notfound/Notfound";
import AddEditBlog from "./pages/EditBlog/AddEditBlog";
import AddEditBlog1 from "./pages/EditBlog1/AddEditBlog1";
import Blog1 from "./pages/Blog/Blog1";
import { ToastContainer } from "react-toastify";
import Login from "./pages/login/Login";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <ToastContainer />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/blog/:id" element={<Blog />} />
          <Route exact path="/addblog" element={<AddEditBlog />} />
          <Route exact path="/editblog/:id" element={<AddEditBlog1 />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/blog" element={<Blog1 />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="*" element={<Notfound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
