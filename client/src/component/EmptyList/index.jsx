import React from "react";
import "./styles.css";

const EmptyList = () => (
  <div>
    <div className="emptyList-wrap">
      <img src="/assets/images/13525-empty.gif" alt="empty" />
    </div>
    <p className="pepe">This Category is not yet post on this Blog</p>
  </div>
);

export default EmptyList;
