import React from "react";

const Pagination = ({ currentPage, onPageChange }) => {
  const totalPages = 5;

  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button className="page-link" onClick={() => handleClick(currentPage - 1)}>
            Previous
          </button>
        </li>
        {[...Array(totalPages).keys()].map(page => (
          <li key={page + 1} className={`page-item ${currentPage === page + 1 ? "active" : ""}`}>
            <button className="page-link" onClick={() => handleClick(page + 1)}>
              {page + 1}
            </button>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
          <button className="page-link" onClick={() => handleClick(currentPage + 1)}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
