import React, { Component} from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import 'bootstrap/dist/css/bootstrap.min.css';

import Register from "./pages/Register/Register";
import MovieView from "./pages/MovieView/MovieView";
import UserProfile from "./pages/UserProfile/UserProfile"
import { Simulate } from "react-dom/test-utils";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route exact path="/" component={Register} exact/>
        <Route exact path="/viewmovies" component={MovieView} exact/>
        <Route exact path="/viewprofiles" component={UserProfile} exact/>
        </Switch>
      </Router>
    );
  }
}
export default App;
