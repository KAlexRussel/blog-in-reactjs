import React from "react";

function Picu({ blog: { imageUrl } }) {
  return (
    <div>
      <img className="blogItem-cover" src={imageUrl} alt="cover" />
    </div>
  );
}

export default Picu;
