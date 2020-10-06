import React from 'react';
import "./Profile.css";
import picture2 from './hp.jpg';
import picture3 from './lor.jpg';
import picture4 from './hunger.jpg';
import picture5 from './spider.jpg';
import picture6 from './gravity.jpg';
import picture7 from './interstellar.jpeg';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, ButtonGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const Profile = () => {

    return (
        <div className ="main-sec">
            <div className="top">
                <div className ="main">
                        <Navbar bg ="dark" variant="dark" expand ="xl">
                            
                            <Navbar.Text>
                            Signed in as: Nazeeha Harun
                            </Navbar.Text>
                            
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="Drop">
                                    <NavDropdown title ="Users you follow" id ="basic-nav-dropdown">
                                        <NavDropdown.Item href ="#">Bushra</NavDropdown.Item>
                                        <NavDropdown.Item href ="#">David</NavDropdown.Item>
                                    </NavDropdown>                          
                                </Nav>
                                <Nav className="Drop2">
                                    <NavDropdown title ="Celebrities you follow" id ="basic-nav-dropdown">
                                        <NavDropdown.Item href ="#">Tom Holland</NavDropdown.Item>
                                        <NavDropdown.Item href ="#">Joseph Russo</NavDropdown.Item>
                                        <NavDropdown.Item href ="#">Stephen McFeely</NavDropdown.Item>
                                    </NavDropdown>    
                                </Nav>
                                
                                <Nav className="Drop3">
                                    <NavDropdown title ="Notifications" id ="basic-nav-dropdown">
                                        <NavDropdown.Item href ="#">Nazeeha made a new review</NavDropdown.Item>
                                        <NavDropdown.Item href ="#">Tom Holland's new movie has been added</NavDropdown.Item>
                                    </NavDropdown>    
                                </Nav>
                                <Nav className="Drop4">
                                    <NavDropdown title ="Settings" id ="basic-nav-dropdown">
                                        <NavDropdown.Item href ="#">Change username/email</NavDropdown.Item>
                                        <NavDropdown.Item href ="#">Change Password</NavDropdown.Item>
                                    </NavDropdown>    
                                </Nav>
  
                            
                            </Navbar.Collapse>
                           
                                <div>
                                <Form inline>
                                    <FormControl type ="text" placeholder ="Browse latest movies" className ="searchMovies" size="lg"/>
                                    <Button variant ="success" size="lg">Browse</Button>
                                </Form>
                                </div>
                               
                                
                        </Navbar>
                        
                        <ButtonGroup size="lg" className="newPeople">
                            <div>
                                <Form inline>
                                    <Form.Check type="switch" id="custom-switch" label="Change to contributing user"/>
                                </Form>
                            </div>
                            
                            <div className="newPeople">
                                <Form inline>
                                    
                                    <FormControl type ="text" placeholder ="Add new people" className ="addNewPeople" size="lg" disabled/>
                                    <Button variant ="success" size="lg" disabled>Add</Button>
                                </Form>
                            </div>
                            
                            <div className ="addMovie">
                                <Button variant ="secondary" size="lg" disabled>
                                    ADD A NEW MOVIE
                                </Button>
                            </div>
                
                        </ButtonGroup>
                                
                    
                    <div className ="welcome">
                        <h1 className = "h1">Welcome to your world of movies</h1>
                    </div>

                  

                
                </div>
            </div>
            
            <div className="middle2">
                <div className ="mid2">
                    <h3 className = "h3">Your top 3 recommended movies </h3>
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


            </div>
            
            <div className="bottom2">
                <div className ="mid3">
                    <h3 className = "h3">Latest movies streaming</h3>
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


            </div>
    </div>
        

    );

}

export default Profile;
