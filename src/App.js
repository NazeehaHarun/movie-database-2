import React, { Component} from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Register from "./pages/Register/Register";
import MovieView from "./pages/MovieView/MovieView";
import { Simulate } from "react-dom/test-utils";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route exact path="/" component={Register} exact/>
        <Route exact path="/viewmovies" component={MovieView} exact/>
        </Switch>
      </Router>
    );
  }
}
export default App;
