import React, { useState } from "react";
import BlogList from "../../component/BlogList";
import EmptyList from "../../component/EmptyList";
import Footer from "../../component/footer/Footer";
import Logo from "../../component/logo/Logo";
import Navbar from "../../component/navbar/Navbar";
import Searchbar from "../../component/Searchbar/Searchbar";
import { blogList } from "../../config/data";

import "./blog.css";

function Blog1() {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey("");
  };
  return (
    <div>
      <Navbar />
      <Logo />

      <Searchbar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}

      <Footer />
    </div>
  );
}

export default Blog1;
