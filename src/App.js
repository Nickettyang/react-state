// src/App.js
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Custom styles

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Jane Smith",
        bio: "A dedicated software engineer with a passion for learning and innovation.",
        imgSrc: "https://randomuser.me/api/portraits/women/44.jpg", // Reliable image URL
        profession: "Software Engineer",
      },
      shows: false,
      intervalId: null,
      timeSinceMounted: 0,
    };
  }

  componentDidMount() {
    // Set interval to update time since mounted
    const intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMounted: prevState.timeSinceMounted + 1,
      }));
    }, 1000);

    this.setState({ intervalId });
  }

  componentWillUnmount() {
    // Clear the interval when the component unmounts
    clearInterval(this.state.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  render() {
    const { person, shows, timeSinceMounted } = this.state;

    return (
      <div className="container mt-5">
        <h1 className="text-center">Profile</h1>
        <button className="btn btn-primary mb-3" onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>
        {shows && (
          <div className="card text-center shadow">
            <img
              src={person.imgSrc}
              alt={person.fullName}
              className="card-img-top rounded-circle"
            />
            <div className="card-body">
              <h5 className="card-title">{person.fullName}</h5>
              <p className="card-text">{person.bio}</p>
              <p className="card-text">
                <strong>Profession:</strong> {person.profession}
              </p>
            </div>
          </div>
        )}
        <p className="mt-3 text-center">
          Time since mounted: {timeSinceMounted} seconds
        </p>
      </div>
    );
  }
}

export default App;
