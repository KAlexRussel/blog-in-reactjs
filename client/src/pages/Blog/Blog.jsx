import React from "react";
import BlogList from "../../component/BlogList";
import Footer from "../../component/footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import Searchbar from "../../component/Searchbar/Searchbar";
import { blogList } from "../../config/data";
function Blog() {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <BlogList blogs={blogList} />

      <Footer />
    </div>
  );
}
export default Blog;
