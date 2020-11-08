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

import OtherUser from "./pages/OtherUser/OtherUser"

import Header from "./components/Header/Header";

import { Simulate } from "react-dom/test-utils";
//import DynamicMovieView from "./pages/MovieView/DynamicMovieView";


class App extends React.Component {
  render() {
    return (
      <Router>
          
        <Header />
          
        <Switch>
        <Route exact path = "/" component = {Header} exact />
        <Route exact path="/registration" component={Register} exact/>
        <Route exact path="/viewmovies" component={MovieView} exact/>
        <Route path="/viewmovies/:movieTitle" component={MovieView}/>

        <Route exact path="/viewUserProfile" component={Profile} exact/>
        <Route exact path="/viewActorPage" component={Actor} exact/>
        <Route exact path="/viewDirectorPage" component={Director} exact/>
        <Route exact path="/viewWriterPage" component={Writer} exact/>
        <Route exact path="/viewAddMovieForm" component={AddMovie} exact/>

        <Route exact path="/viewOtherProfiles" component={OtherUser} exact/>
        
        </Switch>
      </Router>
    );
  }
}
export default App;
