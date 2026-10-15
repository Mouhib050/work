import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import ProductImage from "./Image";

const firstName = "XXXXXXXXXXXXXX";

const App = () => {
  return (
    <div className="container mt-5 text-center">
      <Card
        style={{
          width: "25rem",
          margin: "auto",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }}
      >
        <ProductImage />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <div className="mt-4">
        {firstName ? (
          <>
            <h2>Hello, {firstName}!</h2>
            <img
              src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
              alt="Profile"
              className="rounded-circle mt-2"
              width={250}
              height={250}
            />
          </>
        ) : (
          <h2>Hello, there!</h2>
        )}
      </div>
    </div>
  );
};

export default App;
