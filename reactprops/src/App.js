import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayersList from "./PlayerList";

const App = () => {
  return (
    <div className="container mt-5 text-center">
      <h1>FIFA Player Cards</h1>
      <PlayersList />
    </div>
  );
};

export default App;
