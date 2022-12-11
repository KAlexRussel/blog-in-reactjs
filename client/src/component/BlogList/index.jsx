import React from "react";
import BlogItem from "./BlogItem";

import "./styles.css";

const BlogList = ({ blogs, handleDelete }) => {
  return (
    <div>
      {/* <div className="head-2">
        <h2> Blogs</h2>
      </div> */}

      <div className="blogList-wrap">
        {blogs.map((blog, index) => (
          <BlogItem blog={blog} key={index} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
