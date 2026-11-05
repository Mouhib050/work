import React, { Component } from "react";
import "./App.css";

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <img src={movie.posterURL} alt={movie.title} width={200} height={200} />
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <h3>Rating: {movie.rating}</h3>
      </div>
    );
  }
}

class MovieList extends Component {
  render() {
    const { movies, filterTitle, filterRating } = this.props;
    return (
      <div className="movie-list">
        {movies
          .filter(
            (movie) =>
              movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
              movie.rating >= filterRating
          )
          .map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    const { filterTitle, setFilterTitle, filterRating, setFilterRating } =
      this.props;
    return (
      <div className="filter">
        <input
          type="text"
          placeholder="Filter by title"
          value={filterTitle}
          onChange={(e) => setFilterTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Filter by rating"
          value={filterRating}
          onChange={(e) => setFilterRating(Number(e.target.value))}
        />
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          title: "Inception",
          description: "A mind-bending thriller by Christopher Nolan.",
          posterURL:
            "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
          rating: 5,
        },
        {
          title: "Interstellar",
          description: "A journey through space and time.",
          posterURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjpWCj2Vx82V7KfN5JcKXDXVmo2wdOp39VSA&s",
          rating: 4,
        },
      ],
      filterTitle: "",
      filterRating: 0,
      newMovie: {
        title: "",
        description: "",
        posterURL: "",
        rating: 1,
      },
    };
  }

  setFilterTitle = (title) => {
    this.setState({ filterTitle: title });
  };

  setFilterRating = (rating) => {
    this.setState({ filterRating: rating });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      newMovie: { ...prevState.newMovie, [name]: value },
    }));
  };

  addMovie = () => {
    this.setState((prevState) => ({
      movies: [...prevState.movies, prevState.newMovie],
      newMovie: { title: "", description: "", posterURL: "", rating: 1 },
    }));
  };

  render() {
    const { movies, filterTitle, filterRating, newMovie } = this.state;
    return (
      <div className="App">
        <h1>Movie App</h1>
        <Filter
          filterTitle={filterTitle}
          setFilterTitle={this.setFilterTitle}
          filterRating={filterRating}
          setFilterRating={this.setFilterRating}
        />
        <MovieList
          movies={movies}
          filterTitle={filterTitle}
          filterRating={filterRating}
        />
        <div className="add-movie">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newMovie.title}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={newMovie.description}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="posterURL"
            placeholder="Poster URL"
            value={newMovie.posterURL}
            onChange={this.handleInputChange}
          />
          <input
            type="number"
            name="rating"
            placeholder="Rating"
            value={newMovie.rating}
            onChange={this.handleInputChange}
          />
          <button onClick={this.addMovie}>Add Movie</button>
        </div>
      </div>
    );
  }
}

export default App;
