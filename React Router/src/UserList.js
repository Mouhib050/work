import React from "react";
import { Link } from "react-router-dom";
import movies from "./movies";
import { Card } from "react-bootstrap";

const UserList = () => (
  <div className="d-flex flex-wrap justify-content-center">
    {movies.map((movie) => (
      <Card key={movie.id} style={{ width: "18rem", margin: "10px" }}>
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Link to={`/movie/${movie.id}`} className="btn btn-primary">
            View Details
          </Link>
        </Card.Body>
      </Card>
    ))}
  </div>
);

export default UserList;
