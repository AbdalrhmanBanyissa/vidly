import React, { Component } from "react";
import Movies from "./components/movies";
import { getMovies } from "./services/fakeMovieService";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: getMovies(),
    };
  }

  handleDeleteMovie = (_id) => {
    const movies = this.state.movies.filter((movie) => movie._id !== _id);
    this.setState({ movies });
  };

  render() {
    const { movies } = this.state;

    if (movies.length === 0)
      return (
        <div className=" p-3 py-md-4">
          <h1>There are no movies in the database</h1>
        </div>
      );

    return (
      <div className=" p-3 py-md-4">
        <h1>Showing {movies.length} movies in the database</h1>
        <Movies moviesData={movies} onDeleteMovie={this.handleDeleteMovie} />
      </div>
    );
  }
}
export default App;
