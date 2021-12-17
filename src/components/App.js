import React, { Component } from "react";
import Header from "./Bootstrap/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header dark={true} className="Header">
          COVID Flight Experiences
        </Header>
      </div>
    );
  }
}

export default App;
