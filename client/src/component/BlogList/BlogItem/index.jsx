import React from "react";
import { Link } from "react-router-dom";
import Chip from "../../Chip";
import "./styles.css";

const BlogItem = ({
  blog: {
    description,
    title,
    // createdAt,
    // authorName,
    // authorAvatar,
    cover,
    imageUrl,
    category,
    id,

    excerpt,
  },
  handleDelete,
}) => {
  return (
    <div className="blogItem-wrap">
      <Link className="blogItem-link" to={`/blog/${id}`}>
        <img className="blogItem-cover" src={imageUrl} alt="cover" />
        <Chip label={category} />
        <h3>{title}</h3>
        <p className="blogItem-desc">{description}</p>
      </Link>
      <footer>
        {/* <div className="blogItem-author">
          <img src={authorAvatar} alt="avatar" />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div> */}
        <div className="operations">
          <Link to={`/editblog/${id}`}>
            <div>
              <i className="fas fa-pen-square"></i>
              {/* <i class="fas fa-pencil-square-o" aria-hidden="true"></i> */}
            </div>
          </Link>
          <div>
            <button className="fus" onClick={() => handleDelete(id)}>
              <i className="fa fa-trash" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        {/* 
          ➝
        </Link> */}
      </footer>
    </div>
  );
};

export default BlogItem;
