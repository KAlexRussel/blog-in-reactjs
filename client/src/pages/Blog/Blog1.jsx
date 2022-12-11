import React, { useState, useEffect } from "react";
import BlogList from "../../component/BlogList";
import EmptyList from "../../component/EmptyList";
import Footer from "../../component/footer/Footer";
import Logo from "../../component/logo/Logo";
import Navbar from "../../component/navbar/Navbar";
import Searchbar from "../../component/Searchbar/Searchbar";
// import { blogList } from "../../config/data";
import { toast } from "react-toastify";
import axios from "axios";

import "./blog.css";

function Blog1() {
  const [data, setData] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    LoadBlogsData();
  }, []);
  const LoadBlogsData = async () => {
    const response = await axios.get("http://localhost:3006/blogs");
    if (response.status === 200) {
      setData(response.data);
    } else {
      toast.error("something when wrong");
    }
  };
  console.log("data", data);

  const handleDelete = async (id) => {
    if (window.confirm("do you really want to dele this blog?")) {
      const response = await axios.delete(`http://localhost:3006/blogs/${id}`);
      if (response.status === 200) {
        toast.success("blog deleted succesfully");
        LoadBlogsData();
      } else {
        toast.error("something when wrong");
      }
    }
  };

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    // const allBlogs = blogList;
    // const filteredBlogs = allBlogs.filter((blog) =>
    //   blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    // );
    // setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setData([]);
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
      {!data.length ? (
        <EmptyList />
      ) : (
        <BlogList blogs={data} handleDelete={handleDelete} />
      )}

      <Footer />
    </div>
  );
}

export default Blog1;
