import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
function Pagination({
  pageSize,
  currentPage,
  totalNumberOfMovies,
  onSelectPage,
}) {
  const numberOfPages = Math.ceil(totalNumberOfMovies / pageSize);
  // if (numberOfPages === 1) return null;
  const pages = _.range(1, numberOfPages + 1);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((page) => {
          return (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="page-link" onClick={() => onSelectPage(page)}>
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalNumberOfMovies: PropTypes.number.isRequired,
  onSelectPage: PropTypes.func.isRequired,
};

export default Pagination;
