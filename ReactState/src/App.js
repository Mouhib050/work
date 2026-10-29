import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Person: {
        fullName: "John Doe",
        bio: "Software Engineer passionate about coding and technology.",
        imgSrc:
          "https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg",
        profession: "Software Engineer",
      },
      shows: false,
      timeSinceMounted: 0,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMounted: prevState.timeSinceMounted + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleShow = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  render() {
    const { Person, shows, timeSinceMounted } = this.state;
    return (
      <div className="App">
        <h1>Person Profile</h1>
        <button onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>
        {shows && (
          <div className="profile">
            <img
              src={Person.imgSrc}
              alt={Person.fullName}
              width={150}
              height={150}
            />
            <h2>{Person.fullName}</h2>
            <p>{Person.bio}</p>
            <h3>{Person.profession}</h3>
          </div>
        )}
        <p>Time since component mounted: {timeSinceMounted} seconds</p>
      </div>
    );
  }
}

export default App;
