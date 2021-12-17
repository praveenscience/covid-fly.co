import React, { Component } from "react";
import Header from "./Bootstrap/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header dark={true} className="Header justify-content-center">
          COVID Flight Experiences
        </Header>
        <div className="text-center p-5 m-5">
          <img src="https://i.imgur.com/BZjNB8B.png" alt="Work in Progress" />
          <p className="display-4">Work in Progress</p>
        </div>
      </div>
    );
  }
}

export default App;
