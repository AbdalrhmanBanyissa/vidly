import React from "react";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { Paginate } from "../utils/paginate";
const Movies = ({
  moviesData,
  pageSize,
  currentPage,
  onDeleteMovie,
  onLikeMovie,
  onSelectPage,
}) => {
  const paginateMovies = Paginate(moviesData, currentPage, pageSize);
  if (moviesData.length === 0)
    return (
      <div className=" p-3 py-md-4">
        <h1>There are no movies in the database</h1>
      </div>
    );
  return (
    <React.Fragment>
      <h1>Showing {paginateMovies.length} movies in the database</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {paginateMovies.map((movie) => {
            return (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onLikeMovie={() => onLikeMovie(movie)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => onDeleteMovie(movie._id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        pageSize={pageSize}
        currentPage={currentPage}
        totalNumberOfMovies={moviesData.length}
        onSelectPage={onSelectPage}
      />
    </React.Fragment>
  );
};

export default Movies;
