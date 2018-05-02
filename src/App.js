import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import propTypes from "prop-types";
import Home from "./views/Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  history: propTypes.any
};

export default App;
