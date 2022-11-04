import React, { useState } from "react";
import BlogList from "../../component/BlogList";
import EmptyList from "../../component/EmptyList";
import Footer from "../../component/footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import Searchbar from "../../component/Searchbar/Searchbar";
import quote from "../../image/quote.png";
import vacation from "../../image/vacation.jpeg";
import { blogList } from "../../config/data";

import "./home.css";

function Home() {
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
      <div>
        <Navbar />
        <div className="head4">
          <p>KUAVO ALEX'S BLOG</p>
        </div>
        <hr />

        <div className="main-content">
          <div className="main-image">
            <img src={quote} alt="quote" />
            <p className="story">
              The best time to act on this was decades ago.The second best time
              is now.
            </p>
          </div>
          <div className="vl"></div>
          <div className="sunrise">
            <img src={vacation} alt="sunrise" />
          </div>
        </div>
      </div>
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

export default Home;
