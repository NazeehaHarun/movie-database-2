import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Profile.css";
import picture2 from "./hp.jpg";
import picture3 from "./lor.jpg";
import picture4 from "./hunger.jpg";
import picture5 from "./spider.jpg";
import picture6 from "./gravity.jpg";
import picture7 from "./interstellar.jpeg";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  ButtonGroup,
  Card
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import {Link} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NavigateButton from "../../components/NavigateButton/NavigateButton";
import UnfollowButton from "../../components/UnfollowButton/UnfollowButton";

const Profile = ({ match }) => {

    const {
        params: { userId },
      } = match;

  const [data, setData] = useState({
    name: "Nazeeha",
    type: "Regular",
    recommendedMovies: [
      {
        Title: "Toy Story",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg",
      },
      {
        Title: "Harry Potter",
        Poster:
          "https://i.pinimg.com/originals/5f/a4/b7/5fa4b7287975bbb34f0d61008cc1d586.jpg",
      },
      {
        Title: "A Silent Voice",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZGRkOGMxYTUtZTBhYS00NzI3LWEzMDQtOWRhMmNjNjJjMzM4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      },
      {
        Title: "Crazy Rich Asians",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTYxNDMyOTAxN15BMl5BanBnXkFtZTgwMDg1ODYzNTM@._V1_.jpg",
      },
      {
        Title: "The Lion King",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_.jpg",
      },
      {
        Title: "Star Wars: A New Hope",
        Poster:
          "https://kbimages1-a.akamaihd.net/ea6a1631-34e8-4369-b777-cf342521d3e0/1200/1200/False/a-new-hope-star-wars-episode-iv.jpg",
      },
    ],
    recentMovies: [
      {
        Title: "Violet Evergarden",
        Poster: "https://i.redd.it/mh0czsfbgu641.jpg",
      },
      {
        Title: "Demon Slayer",
        Poster:
          "https://upload.wikimedia.org/wikipedia/en/2/21/Kimetsu_no_Yaiba_Mugen_Ressha_Hen_Poster.jpg",
      },
      {
        Title: "All My Life",
        Poster:
          "https://media2.firstshowing.net/firstshowing/img11/AllmyLifeOfficialPosterimagebig5990.jpg",
      },
    ],
    followingUsers: [

        {"Type":"Regular","userName":"Kevin", "id":"2"},
        {"Type":"Regular","userName":"Bashura", "id":"2"}
      ],
      followingCelebrites: [
       {"Role":"Actors", "Name":"Tom Holland","id":"6"},
    {"Role":"Actors", "Name":"Robert Downy Jr","id":"7"},
    {"Role":"Actors","Name":"Chris Evans", "id":"8"},
    ],
  });

  useEffect(() => {
      
      axios
      .get(`/users/${userId}`)
      .then((response) => {

        const userObj = response.data; 
        
        axios.get(`/users/${userId}/movies`)
        .then(response => {
          let userMovies = response.data; 

          setData({
            name: userObj.userName,
            type: userObj.Type,
            recommendedMovies: userObj.recommendedMovies,
            followingUsers: userObj.followingUsersList,
            followingCelebrites: userObj.followingPeopleList,
            recommendedMovies: userMovies,
            recentMovies: [
              {
                Title: "Violet Evergarden",
                Poster: "https://i.redd.it/mh0czsfbgu641.jpg",
              },
              {
                Title: "Demon Slayer",
                Poster:
                  "https://upload.wikimedia.org/wikipedia/en/2/21/Kimetsu_no_Yaiba_Mugen_Ressha_Hen_Poster.jpg",
              },
              {
                Title: "All My Life",
                Poster:
                  "https://media2.firstshowing.net/firstshowing/img11/AllmyLifeOfficialPosterimagebig5990.jpg",
              },
            ],
          });



        }).catch(error => {
          console.log(error);
        });

        
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const handleChange = () => {

    axios.put(`/users/status`)
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    })
  }
  let userRecommendedMovies = [];

  data.recommendedMovies.forEach((movie) => {
    userRecommendedMovies.push(
      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src= {movie.Poster} />
              <Card.Body>
                 <Card.Title>{movie.Title}</Card.Title>   
                 <Card.Text>Genre: {movie.Genre}</Card.Text>
                  <Card.Text>Release Year: {movie.Year}</Card.Text>
                  <Card.Text>Average rating: {movie.minrating}</Card.Text>
                 <NavigateButton text = "Visit Movie" route = {`/viewmovies/${movie._id}`}/>
            </Card.Body>
      </Card>
    );
  });

  let userRecentMovies = [];
  
  data.recentMovies.forEach((movie) => {
    userRecentMovies.push(<img id="p1" src={movie.Poster} alt="moviePoster" />);
  });

  let userFollowingUsers = [];

  data.followingUsers.forEach(user => {
    userFollowingUsers.push(
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{user.userName}</Card.Title>
          
          <NavigateButton route = {`/viewOtherProfiles/${user._id}`} text = "Visit"/>
          <UnfollowButton size="md" name={user.userName} userId = {user._id} />
        </Card.Body>
    </Card>
    )
  });
  
  let userFollowingPeople = [];
  
  data.followingCelebrites.forEach(person => {
    let viewRoute = "";
    if (person.Role === "Director") {
      viewRoute = "viewDirectorPage";
    }
    else if (person.Role === "Writer") {
      viewRoute = "viewWriterPage";
    }
    else if (person.Role === "Actor") {
      viewRoute = "viewActorPage";
    }

    userFollowingPeople.push(
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{person.Name}</Card.Title>
          
          <NavigateButton route = {`/${viewRoute}/${person._id}`} text = "Visit"/>
          <UnfollowButton size="md" name={person.userName} personId = {person._id} />
        </Card.Body>
      </Card>

     )
  })


  let contributorCheck = true; 
  let disableContributorAccess = true;

  return (
    <div className="main-sec">
      <div className="top">
        <div className="main">
          <Navbar bg="dark" variant="dark" expand="xl">
            <Navbar.Text>Signed in as: {data.name} </Navbar.Text>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
             

              <Nav className="Drop3">
                <NavDropdown title="Notifications" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#">
                    Nazeeha made a new review
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Tom Holland's new movie has been added
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav className="Drop4">
                <NavDropdown title="Settings" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#">
                    Change username/email
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">Change Password</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <div>
              
            <Navbar.Text>User Type: {data.type}</Navbar.Text>
            </div>
          </Navbar>

          {data.type === "Contributing"? contributorCheck = true : contributorCheck = false}
          <ButtonGroup size="lg" className="newPeople">
            <div>
              <Form inline>
                <Form.Check
                  checked = {contributorCheck}
                  type="switch"
                  id="custom-switch"
                  label="Change to contributing user"
                  onChange = {handleChange}
                />
              </Form>
            </div>

            {data.type === "Contributing"? disableContributorAccess = false : disableContributorAccess = true}
            <div className="newPeople">
              <Link to = "/viewAddPeopleForm"> 
              <Button variant="success" size="lg" disabled = {disableContributorAccess}>
                  Add New People
                </Button>
              </Link>
            </div>

            <div className="addMovie">
            <Link to = "/viewAddMovieForm"> 
              <Button variant="secondary" size="lg" disabled = {disableContributorAccess} >
                ADD A NEW MOVIE
              </Button>
              </Link>
            </div>
          </ButtonGroup>

          <div className="welcome">
            <h1 className="h1">Welcome to your world of movies</h1>
          </div>
        </div>
      </div>

      <div className="middle2">
        <div className="mid2">
          <h3 className="h3">Your top 3 recommended movies </h3>
          <div className="movies">
            <div>
              <div className="post">
                {
                  userRecommendedMovies[
                    0
                  ]
                }
              </div>
            </div>
            <div>
              <div className="post">
                {
                  userRecommendedMovies[
                    1
                  ]
                }
                ;
              </div>
            </div>
            <div>
              <div className="post">
                {
                  userRecommendedMovies[
                    2
                  ]
                }
                ;
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom2">
        <div className="mid3">
          <h3 className="h3">Latest movies streaming</h3>
          <div className="movies">
            <div>
              <div className="post">
                {
                  userRecentMovies[
                    0
                  ]
                }
                ;
              </div>
            </div>
            <div>
              <div className="post">
                {
                  userRecentMovies[
                    1
                  ]
                }
                ;
              </div>
            </div>
            <div>
              <div className="post">
                {
                  userRecentMovies[
                    2
                  ]
                }
                ;
              </div>
            </div>
          </div>
        </div>
      </div>

      <Row className = "following">
        <Col className = "post">
        {userFollowingUsers}
        </Col>

        <Col>
        {userFollowingPeople}
        </Col>
      </Row>


    </div>
  );
};

export default Profile;
