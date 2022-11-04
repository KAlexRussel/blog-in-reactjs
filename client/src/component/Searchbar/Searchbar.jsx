import React from "react";
import "./searchbar.css";

const Searchbar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <div className="searchBar-wrap">
    <form onSubmit={formSubmit}>
      <input
        type="text"
        placeholder="Search By Category"
        value={value}
        onChange={handleSearchKey}
      />
      {value && <span onClick={clearSearch}>X</span>}
      <button>
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  </div>
);

export default Searchbar;
