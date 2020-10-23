import React, { useState, useEffect } from "react";
import Notification from "../../components/Notification/Notification";
import axios from "axios";

import "./Header.css";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Switch,
  Toast,
} from "react-bootstrap";

const Header = () => {
  const [search, setSearch] = useState({ movieTitle: "" });
  const [hasSearch, setHasSearch] = useState(false);
  const [movie, setMovie] = useState({ 
    movieData : {
      name: "Weathering With You",
      releaseYear: "2019",
      averageRating: "8.0",
      runTime: "1h 51m",
      genres: "Anime, Romance, Fantasy",
      moviePlot:
        "A boy runs away to Tokyo and befriends a girl who appears to be able to manipulate the weather.",
    }
  });

  const handleChange = (event) => {
    setSearch({ ...search, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setHasSearch(!hasSearch);
    console.log(hasSearch);
    
  };

  return (
    <div className="header">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Header</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="Drop">
            <Nav.Link href="/viewmovies">View Movies</Nav.Link>
          </Nav>

          <Nav className="Drop">
            <Nav.Link href="/viewDirectorPage">View Directors</Nav.Link>
          </Nav>

          <Nav className="Drop">
            <Nav.Link href="/viewWriterPage">View Writers</Nav.Link>
          </Nav>

          <Nav className="Drop">
            <Nav.Link href="/viewActorPage">View Actors</Nav.Link>
          </Nav>

          <Nav className="Drop">
            <Nav.Link href="/viewAddMovieForm">Add Movie</Nav.Link>
          </Nav>

          <Nav className="Drop">
            <Nav.Link href="/viewUserProfile">View Profile</Nav.Link>
          </Nav>
          <Nav className="Drop">
            <Nav.Link href="/viewOtherProfiles">View Other Profiles</Nav.Link>
          </Nav>

          <Nav className="Drop">
            <Nav.Link href="registration">Login/Register</Nav.Link>
          </Nav>

          <Form inline onSubmit={handleSubmit}>
            <FormControl
              type="text"
              placeholder="Browse latest movies"
              className="searchMovies"
              name="movieTitle"
              onChange={handleChange}
            />
            <Button onClick={handleSubmit} variant="outline-success">
              Browse
            </Button>
          </Form>
          <Form>
            <Form.Check
              label="Switch to contributing user"
              id="switch"
              type="switch"
            />
          </Form>
        </Navbar.Collapse>
      </Navbar>

      {hasSearch === true ? (
        <div>
          <Notification message={search.movieTitle} />
         
        </div>
      ) : null}
    </div>
  );
};

export default Header;
