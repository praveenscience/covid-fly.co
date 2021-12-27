import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Bootstrap/Header";
import Home from "./Pages/Home";
import New from "./Pages/New";
import Error from "./Pages/Error";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header dark={true} className="Header justify-content-center">
          COVID Flight Experiences
        </Header>
        <Switch>
          <Route path="/new" component={New} />
          <Route path="/" exact={true} component={Home} />
          <Route component={Error} />
        </Switch>
      </div>
    );
  }
}

export default App;
