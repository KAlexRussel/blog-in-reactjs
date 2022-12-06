import React from "react";
import { Link } from "react-router-dom";
import Chip from "../../Chip";
import "./styles.css";

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => {
  return (
    <div className="blogItem-wrap">
      <Link className="blogItem-link" to={`/blog/${id}`}>
        <img className="blogItem-cover" src={cover} alt="cover" />
        <Chip label={category} />
        <h3>{title}</h3>
        <p className="blogItem-desc">{description}</p>
      </Link>
      <footer>
        <div className="blogItem-author">
          <img src={authorAvatar} alt="avatar" />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <div className="operations">
          <div>
            <i class="fas fa-pen-square"></i>
          </div>
          <div>
            <i class="fa fa-trash" aria-hidden="true"></i>
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
