import React, {useState, useEffect} from 'react';
import axios from "axios";

import "./Profile.css";
import picture2 from './hp.jpg';
import picture3 from './lor.jpg';
import picture4 from './hunger.jpg';
import picture5 from './spider.jpg';
import picture6 from './gravity.jpg';
import picture7 from './interstellar.jpeg';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, ButtonGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const Profile = ({match}) => {

    const [data, setData] = useState({
        name: "Nazeeha",
        recommendedMovies: [ {Title: "Toy Story",Poster: "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg"},
                            {Title: "Harry Potter", Poster: "https://i.pinimg.com/originals/5f/a4/b7/5fa4b7287975bbb34f0d61008cc1d586.jpg" },
                            {Title: "A Silent Voice", Poster: "https://m.media-amazon.com/images/M/MV5BZGRkOGMxYTUtZTBhYS00NzI3LWEzMDQtOWRhMmNjNjJjMzM4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"},
                            {Title: "Crazy Rich Asians", Poster: "https://m.media-amazon.com/images/M/MV5BMTYxNDMyOTAxN15BMl5BanBnXkFtZTgwMDg1ODYzNTM@._V1_.jpg"},
                            {Title: "The Lion King", Poster: "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_.jpg"},
                            {Title: "Star Wars: A New Hope", Poster: "https://kbimages1-a.akamaihd.net/ea6a1631-34e8-4369-b777-cf342521d3e0/1200/1200/False/a-new-hope-star-wars-episode-iv.jpg"},
    ], 
    recentMovies: [
        {Title: "Violet Evergarden", Poster: "https://i.redd.it/mh0czsfbgu641.jpg"},
        {Title: "Demon Slayer", Poster: "https://upload.wikimedia.org/wikipedia/en/2/21/Kimetsu_no_Yaiba_Mugen_Ressha_Hen_Poster.jpg"},
        {Title: "All My Life", Poster: "https://media2.firstshowing.net/firstshowing/img11/AllmyLifeOfficialPosterimagebig5990.jpg"},
    ]
    });

    const {
        params: { name },
      } = match;
      
      useEffect(() => {

        

      });

      let userRecommendedMovies = [];

      data.recommendedMovies.forEach(movie => {

        userRecommendedMovies.push(
            <img id ="p1" src ={movie.Poster} alt="moviePoster" />
        );
      });

      let userRecentMovies = [];

      data.recentMovies.forEach(movie => {
          userRecentMovies.push(
            <img id ="p1" src ={movie.Poster} alt="moviePoster" />
          );
      })


    return (
        <div className ="main-sec">
            <div className="top">
                <div className ="main">
                        <Navbar bg ="dark" variant="dark" expand ="xl">
                            
                            <Navbar.Text>
                            Signed in as: {data.name}
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
                                {userRecommendedMovies[Math.floor(Math.random() * userRecommendedMovies.length)]}
                            </div>
                        </div>
                        <div>
                            <div className="post">
                                {userRecommendedMovies[Math.floor(Math.random() * userRecommendedMovies.length)]};
                            </div>
                        </div>
                        <div>
                            <div className="post">
                                {userRecommendedMovies[Math.floor(Math.random() * userRecommendedMovies.length)]};
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
                                {userRecentMovies[Math.floor(Math.random() * userRecentMovies.length)]};
                            </div>
                        </div>
                        <div>
                            <div className="post">
                                {userRecentMovies[Math.floor(Math.random() * userRecentMovies.length)]};
                            </div>
                        </div>
                        <div>
                            <div className="post">
                                {userRecentMovies[Math.floor(Math.random() * userRecentMovies.length)]};
                            </div>
                        </div>
                    </div>
                </div>


            </div>
    </div>
        

    );

}

export default Profile;
