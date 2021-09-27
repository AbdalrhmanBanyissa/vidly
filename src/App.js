import React, { Component } from "react";
import Movies from "./components/movies";
import { getMovies } from "./services/fakeMovieService";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: getMovies(),
      pageSize: 4,
      currentPage: 1,
    };
  }
  handleSelectPage = (page) => {
    this.setState({ currentPage: page });
  };

  handleDeleteMovie = (_id) => {
    const movies = this.state.movies.filter((movie) => movie._id !== _id);
    this.setState({ movies });
  };

  handleLikeMovie = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  render() {
    const { movies, pageSize, currentPage } = this.state;

    return (
      <div className=" p-3 py-md-4">
        <Movies
          pageSize={pageSize}
          currentPage={currentPage}
          moviesData={movies}
          onDeleteMovie={this.handleDeleteMovie}
          onLikeMovie={this.handleLikeMovie}
          onSelectPage={this.handleSelectPage}
        />
      </div>
    );
  }
}
export default App;
