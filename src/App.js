import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import propTypes from "prop-types";
import Index from "./views/index/index";
import Player from "./views/player/player";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <div>
          <Route exact path="/" component={Index} />
          <Route path="/player/:songId" component={Player} />
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  history: propTypes.any
};

export default App;
