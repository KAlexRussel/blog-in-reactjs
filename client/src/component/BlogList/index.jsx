import React from "react";
import BlogItem from "./BlogItem";
import "./styles.css";

const BlogList = ({ blogs }) => {
  return (
    <div>
      {/* <div className="head-2">
        <h2> Blogs</h2>
      </div> */}

      <div className="blogList-wrap">
        {blogs.map((blog) => (
          <BlogItem blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
