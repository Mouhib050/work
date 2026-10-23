import React from "react";
import { Card } from "react-bootstrap";

const Player = ({ name, team, nationality, jerseyNumber, age, image }) => (
  <Card
    style={{
      width: "18rem",
      margin: "10px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    }}
  >
    <Card.Img variant="top" src={image} alt={name} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        <strong>Team:</strong> {team} <br />
        <strong>Nationality:</strong> {nationality} <br />
        <strong>Jersey Number:</strong> {jerseyNumber} <br />
        <strong>Age:</strong> {age}
      </Card.Text>
    </Card.Body>
  </Card>
);

Player.defaultProps = {
  name: "Unknown",
  team: "Unknown",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  image: "https://via.placeholder.com/150",
};

export default Player;
