import React, { Component} from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import {Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Register from "./pages/Register/Register";
import MovieView from "./pages/MovieView/MovieView";

import Profile from "./pages/Profile/Profile";
import Actor from "./pages/Actor/Actor";
import Director from "./pages/Director/Director";
import Writer from "./pages/Writer/Writer";
import AddMovie from "./pages/AddMovie/AddMovie";

import UserProfile from "./pages/UserProfile/UserProfile"

import { Simulate } from "react-dom/test-utils";


class App extends React.Component {
  render() {
    return (
      <Router>

            <ul>
          <li>
            <Link to="/registration">Click to view registration/sign up page</Link>
          </li>
          <li>
            <Link to="/viewmovies">Click to view Movie page</Link>
          </li>
          <li>
            <Link to="/viewUserProfile">Click to view user's profile page</Link>
          </li>
          <li>
            <Link to="/viewActorPage">Click to view actor's page</Link>
          </li>
          <li>
            <Link to="/viewDirectorPage">Click to view director's page</Link>
          </li>
          <li>
            <Link to="/viewWriterPage">Click to view writer's page</Link>
          </li>
          <li>
            <Link to="/viewAddMovieForm">Click to view Add Movie Form</Link>
          </li>
        </ul>
        <Switch>
        <Route exact path="/registration" component={Register} exact/>
        <Route exact path="/viewmovies" component={MovieView} exact/>

        <Route exact path="/viewUserProfile" component={Profile} exact/>
        <Route exact path="/viewActorPage" component={Actor} exact/>
        <Route exact path="/viewDirectorPage" component={Director} exact/>
        <Route exact path="/viewWriterPage" component={Writer} exact/>
        <Route exact path="/viewAddMovieForm" component={AddMovie} exact/>

        <Route exact path="/viewOtherProfiles" component={UserProfile} exact/>

        </Switch>
      </Router>
    );
  }
}
export default App;
