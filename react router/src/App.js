import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./UserList";
import MovieDescription from "./MovieDescription";

const App = () => {
  return (
    <Router>
      <div className="container mt-5 text-center">
        <h1>Movie App</h1>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/movie/:id" element={<MovieDescription />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
