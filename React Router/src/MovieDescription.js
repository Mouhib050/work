import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import movies from "./movies";

const MovieDescription = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  return (
    <div>
      {movie ? (
        <>
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <iframe
            width="560"
            height="315"
            src={movie.trailer}
            title={movie.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <br />
          <button
            className="btn btn-primary mt-3"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>
        </>
      ) : (
        <h2>Movie not found</h2>
      )}
    </div>
  );
};

export default MovieDescription;
