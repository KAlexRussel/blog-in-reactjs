import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage/Home";

import "./App.css";
import Blog from "./pages/Blogs/Blog";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Notfound from "./pages/Notfound/Notfound";
import AddEditBlog from "./pages/EditBlog/AddEditBlog";
import Blog1 from "./pages/Blog/Blog1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/blog/:id" element={<Blog />} />
        <Route exact path="/addblog" element={<AddEditBlog />} />
        <Route exact path="/editblog:id" element={<AddEditBlog />} />
        <Route exact path="*" element={<Notfound />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/blog" element={<Blog1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
