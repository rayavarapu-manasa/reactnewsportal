import React from "react";

const Navbar = ({ setCategory }) => {
  return (
    <div className="dropdown mt-3 ms-3" data-bs-theme="dark">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Categories
      </button>
      <ul className="dropdown-menu">
        <li>
          <div className="dropdown-item"  onClick={() => setCategory("sports")}>
            Sports
          </div>
        </li>
        <li>
          <div className="dropdown-item"  onClick={() => setCategory("business")}>
            Business
          </div>
        </li>
        <li>
          <div className="dropdown-item"  onClick={() => setCategory("entertainment")}>
            Entertainment
          </div>
        </li>
        <li>
          <div className="dropdown-item"  onClick={() => setCategory("health")}>
            Health
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
