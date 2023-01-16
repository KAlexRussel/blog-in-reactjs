import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
// import { blogList } from "../../config/data";
import Chip from "../../component/Chip";
// import EmptyList from "../../component/EmptyList";
import "./blog.css";
// import { Link } from "react-router-dom";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import Logo from "../../component/logo/Logo";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import useAxiosFetch from "../../hooks/useAxiosFetch";
import useAxiosDelete from "../../hooks/useAxiosDelete";

const Blog = () => {
  const [data, setData] = useState([]);
  const [blog, setBlog] = useState();

  const { id } = useParams();
  const { datas } = useAxiosFetch(`http://localhost:3006/blogs${id}`);
  // const { data1 } = useAxiosDelete(`http://localhost:3006/blogs${id}`);

  useEffect(() => {
    setData(datas);
  }, [datas]);

  useEffect(() => {
    if (id) {
      // let blog = blog.find((blog) => blog.id === parseInt(id));
      getSingelBlog();
    }
  }, [id]);

  const getSingelBlog = async () => {
    const singleBlog = await axios.get(`http://localhost:3006/blogs/${id}`);
    if (singleBlog.status === 200) {
      // toast.success("information receive succedfully");
      setBlog(singleBlog.data);
      console.log("everything goog");
    } else {
      toast.error("something when wrong");
      console.log("something when wrong");
    }
  };
  // useEffect(() => {
  //   LoadBlogsData();
  // }, []);
  // const LoadBlogsData = async () => {
  //   const response = await axios.get("http://localhost:3006/blogs");
  //   if (response.status === 200) {
  //     setData(response.data);
  //   } else {
  //     toast.error("something when wrong");
  //   }
  // };
  console.log("data", data);
  //delete data
  const handleDelete = async (id) => {
    if (window.confirm("do you really want to delete this blog?")) {
      const response = await axios.delete(`http://localhost:3006/blogs/${id}`);
      if (response.status === 200) {
        toast.success("blog deleted succesfully");
        setData(datas);
        <Link to={`/`} />;
      } else {
        toast.error("something when wrong");
      }
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
          <p className="blog-date">Published {blog && blog.date}</p>
          <h1>{blog && blog.title}</h1>
          <div className="blog-subCategory">
            <Chip label={blog && blog.category} />

            {/* {blog.subCategory.map((category, i) => (
              <div key={i}>
                <Chip label={category} />
              </div>
            ))} */}
          </div>
        </header>
        <img src={blog && blog.imageUrl} alt="cover" />
        <p className="blog-desc">{blog && blog.description}</p>
        <div className="operations">
          <Link to={`/editblog/${id}`}>
            <div>
              <i className="fas fa-pen-square"></i>
              {/* <i class="fas fa-pencil-square-o" aria-hidden="true"></i> */}
            </div>
          </Link>
          <div>
            <Link to={"/"}>
              <button className="fus" onClick={() => handleDelete(id)}>
                <i className="fa fa-trash" aria-hidden="true"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog;
