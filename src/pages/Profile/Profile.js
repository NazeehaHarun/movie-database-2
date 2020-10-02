import React from 'react';
import "./Profile.css";

import picture from './shirt2.jpg';
import picture2 from './hp.jpg';
import picture3 from './lor.jpg';
import picture4 from './hunger.jpg';
import picture5 from './spider.jpg';
import picture6 from './gravity.jpg';
import picture7 from './interstellar.jpeg';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Switch} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {

    return (
        <section className ="main-sec">
            <section className="top">
                <div className ="main">
                        <Navbar bg ="light" expand ="lg">
                            <Navbar.Brand>Navigation bar</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="Drop">
                                    <NavDropdown title ="Users you follow" id ="basic-nav-dropdown">
                                        <NavDropdown.Item href ="#">Nazeeha</NavDropdown.Item>
                                        <NavDropdown.Item href ="#">David</NavDropdown.Item>
                                    </NavDropdown>                          
                                </Nav>
                                <Nav className="Drop2">
                                    <NavDropdown title ="Celebrities you follow" id ="basic-nav-dropdown">
                                        <NavDropdown.Item href ="#">Tom Holland</NavDropdown.Item>
                                        <NavDropdown.Item href ="#">J.K. Rowling</NavDropdown.Item>
                                    </NavDropdown>    
                                </Nav>
                                
                                <Nav className="Drop3">
                                    <NavDropdown title ="Notifications" id ="basic-nav-dropdown">
                                        <NavDropdown.Item href ="#">Nazeeha made a new review</NavDropdown.Item>
                                        <NavDropdown.Item href ="#">A new movie has been added</NavDropdown.Item>
                                    </NavDropdown>    
                                </Nav>
                                <Nav className="Drop4">
                                    <NavDropdown title ="Settings" id ="basic-nav-dropdown">
                                        <NavDropdown.Item href ="#">Change username/email</NavDropdown.Item>
                                        <NavDropdown.Item href ="#">Change Password</NavDropdown.Item>
                                    </NavDropdown>    
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

                    <div className ="toggle">
                            
                    </div>
                    
                    <div className ="welcome">
                        <h1>Welcome to your world of movies</h1>
                    </div>

                
                </div>
            </section>
            
            <section className="middle">
                <div className ="main2">
                    <h3>Top 3 recommended movies based on your previous searches</h3>
                    <div className="movies">
                        <div>
                            <div className="post">
                                <img id ="p1" src ={picture2} alt="moviePoster" />;
                            </div>
                        </div>
                        <div>
                            <div className="post">
                                <img id ="p2" src ={picture3} alt="moviePoster" />;
                            </div>
                        </div>
                        <div>
                            <div className="post">
                                <img id ="p3" src ={picture4} alt="moviePoster" />;
                            </div>
                        </div>
                    </div>
                </div>


            </section>
            
            <section className="bottom">
                <div className ="main3">
                    <h3>Latest movies streaming</h3>
                    <div className="movies">
                        <div>
                            <div className="post">
                                <img id ="p4" src ={picture5} alt="moviePoster" />;
                            </div>
                        </div>
                        <div>
                            <div className="post">
                                <img id ="p5" src ={picture6} alt="moviePoster" />;
                            </div>
                        </div>
                        <div>
                            <div className="post">
                                <img id ="p6" src ={picture7} alt="moviePoster" />;
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </section>
        

    );

}

export default Profile;
