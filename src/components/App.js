import React, { Component } from "react";
import Header from "./Bootstrap/Header";
import Error from "./Pages/Error";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header dark={true} className="Header justify-content-center">
          COVID Flight Experiences
        </Header>
        <Error />
      </div>
    );
  }
}

export default App;
