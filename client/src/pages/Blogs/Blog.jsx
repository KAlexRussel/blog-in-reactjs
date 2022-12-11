import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { blogList } from "../../config/data";
import Chip from "../../component/Chip";
import EmptyList from "../../component/EmptyList";
import "./blog.css";
// import { Link } from "react-router-dom";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import Logo from "../../component/logo/Logo";
import axios from "axios";
import { toast } from "react-toastify";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState();

  useEffect(() => {
    if (id) {
      getSingleBlog();
    }
  }, [id]);

  const getSingleBlog = async () => {
    const response = await axios.get(`http://localhost:3006/blogs/${id}`);
    if (response.status === 200) {
      setBlog(response.data);
    } else {
      toast.error("something when wrong");
    }
  };

  return (
    <>
      <Navbar />
      <Logo />
      {/* <Link className="blog-goBack" to="/">
        <span> &#8592;</span> <span>Go Back</span>
      </Link> */}

      <div className="blog-wrap">
        <header>
          <p className="blog-date">Published {blog.createdAt}</p>
          <h1>{blog && blog.title}</h1>
          <div className="blog-subCategory">
            {blog.subCategory.map((category, i) => (
              <div key={i}>
                <Chip label={category} />
              </div>
            ))}
          </div>
        </header>
        <img src={blog && blog.imageUrl} alt="cover" />
        <p className="blog-desc">{blog.description}</p>
      </div>

      <Footer />
    </>
  );
};

export default Blog;
