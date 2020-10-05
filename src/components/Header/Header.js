import React from 'react';

import './Header.css'

import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Switch} from 'react-bootstrap'

const Header = () => {

    return (
        <div className = "header">
            <Navbar bg ="light" expand ="lg">
                            <Navbar.Brand>Navigation bar</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="Drop">
                                    <Nav.Link>View Movies</Nav.Link>                        
                                </Nav>

                                <Nav className="Drop">
                                    <Nav.Link>View Directors</Nav.Link>                        
                                </Nav>
                                
                                <Nav className="Drop">
                                    <Nav.Link>View Writers</Nav.Link>                        
                                </Nav>

                                <Nav className="Drop">
                                    <Nav.Link>View Actors</Nav.Link>                        
                                </Nav>

                                <Nav className="Drop">
                                    <Nav.Link>View Other Profiles</Nav.Link>                        
                                </Nav>

                                <Nav className="Drop">
                                    <Nav.Link>Login/Register</Nav.Link>                        
                                </Nav>

                                <Form inline>
                                    <FormControl type ="text" placeholder ="Browse latest movies" className ="searchMovies"/>
                                    <Button variant ="outline-success">Browse</Button>
                                </Form>
                                <Form>
                                <Form.Check label ="Switch to contributing user" id ="switch" type ="switch"  />
                                </Form>
                            
                            </Navbar.Collapse>
                        
                        </Navbar>
        </div>
    )

};

export default Header;