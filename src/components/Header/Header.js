import React, { useState, useEffect } from "react";
import Notification from "../../components/Notification/Notification";
import axios from "axios";
import {Link} from "react-router-dom";
import NavigateButton from "../NavigateButton/NavigateButton";

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

  const handleChange = (event) => {
    setSearch({ ...search, [event.target.name]: event.target.value });
    console.log(search.movieTitle);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setHasSearch(!hasSearch);
    console.log(hasSearch);
    
  };
  
  const handleLogout = (event) => {
    event.preventDefault();

    axios.get('/logout')
    .then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    }); 

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
            <Nav.Link href="/viewUserProfile">View Profile</Nav.Link>
          </Nav>
          <Nav className="Drop">
            <Nav.Link href="/viewOtherProfiles">View Other Profiles</Nav.Link>
          </Nav>

          <Nav className="Drop">
            <Nav.Link href="/registration">Login/Register</Nav.Link>
          </Nav>

          <Form inline onSubmit={handleSubmit}>
            <FormControl
              type="text"
              placeholder="Browse latest movies"
              className="searchMovies"
              name="movieTitle"
              onChange={handleChange}
            />

            <NavigateButton route = {"/searchMovie/" + search.movieTitle} text = "Browse" variant = "outline-success"/>
          </Form>
          <Form>
            
          </Form>

          <Button onClick = {handleLogout} type = "submit" variant = "primary">
              Logout
            </Button>

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
