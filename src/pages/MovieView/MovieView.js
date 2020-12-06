import React, {useState, useEffect} from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import JumboTron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table"; 

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


import axios from 'axios';

import MoviePoster from "../../assets/images/WeatheringWithYouPoster.png";
import YourNamePoster from "../../assets/images/YourNameArt.jpg"
import NavigateButton from "../../components/NavigateButton/NavigateButton";
import './MovieView.css'

//import {searchMovie} from "./searchMovie";

const MovieView = ({match}) => {
  
  const {params: {movieId}} = match;

  const initialState = ({
    name: "Weathering With You", 
    releaseYear: "2019", 
    averageRating: "8.0",
    runTime: "1h 51m",
    genres: "Anime, Romance, Fantasy",
    moviePlot: "A boy runs away to Tokyo and befriends a girl who appears to be able to manipulate the weather.",
    movieDirector: [],
    movieWriter: [],
    posterLink: MoviePoster,
    reviews: [],
    similarMovies: [],
    movieActors: [],
    userType: "Regular"
  });

  const [data, setData] = useState(initialState);
  const [reviews, setReview] = useState({
      rating: 0,
      summary: "",
      fullReview: "",
  });

  const [person, setPerson] = useState({
    name: ""
  })

  const ratingNumbers = [1,2,3,4,5,6,7,8,9,10];

  useEffect(() => {

      axios.get(`/movies/${movieId}`)
      .then((response) => {
        console.log(response);
        const movieObj = response.data.movie;

        axios.get(`/movies/${movieId}/similar`)
        .then(response => {
          
          const movies = response.data;
          
          let displayMovies = [];
          let i = 0;
          for (i = 0; i < 3; i++) {
            let randIndex = Math.floor(Math.random()*movies.length) + 1;
            displayMovies.push(movies[randIndex]);
          };

          axios.get(`/movies/${movieId}/people`)
          .then(response => {
            
            let people = response.data;
            console.log(people);
            let actors = [];
            let directors = [];
            let writers = [];
            
            people.forEach(person => {
              if (person.Role === "Actor") {
                actors.push(person);
              }
              else if (person.Role === "Director") {
                directors.push(person);
              } 
              else if (person.Role === "Writer") {
                writers.push(person);
              }
            })

            setData({name: movieObj.Title, 
              releaseYear: movieObj.Year, 
              runTime: movieObj.Runtime, 
              genres: movieObj.Genre, 
              moviePlot: movieObj.Plot, 
              posterLink: movieObj.Poster,
              director: movieObj.Director,
              writer: movieObj.Writer,
              reviews: movieObj.reviews,
              similarMovies: displayMovies,
              averageRating: movieObj.averageRating,
              userType: movieObj.User,
              movieActors: actors,
              movieDirector: directors,
              movieWriter: writers
            });

          }).catch(error => {
            console.log(error)
          });
          
        }).catch(error => {
          console.log(error);
        });

      })
      .catch((error) => {
        console.log(error)
      });
    
  }, [movieId]);

  const handleChange = (event) => {
    setReview({ ...reviews, [event.target.name]: event.target.value });
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    let review = {
      review: reviews
    }
    console.log(review);
      axios.put(`/movies/${movieId}/review`, review)
      .then((response => {
        console.log(response);

      }))
      .catch(err =>{
        console.log(err);
      });
    
  }

  const handlePersonChange = (event) => {
    setPerson({ ...person, [event.target.name]: event.target.value });
    
  }

  const handlePersonSubmit = (event) => {
    event.preventDefault();
    
    let personName = person.name;
    console.log(personName);
    axios.put(`/movies/${movieId}?name=${personName}`)
    .then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    })
    
  }

  let movieReviews = [];
  
  data.reviews.forEach(review => {
    movieReviews.push(
      <div>
        <Card.Header as = "h5">
            Summary of Review: {review.summary} Rating: {review.rating}
        </Card.Header>
        <Card.Text>
          {review.fullReview}
        </Card.Text>

      </div>
    )
  });

  let poster = "";
  
  let displaySimilarMovies = [];
  console.log(data.similarMovies);
  data.similarMovies.forEach(movie => {
    if (movie !== undefined) {
      displaySimilarMovies.push(
        <div>
        <Card style={{ width: '18rem' }}>
  
                      {movie.Poster !== undefined ? (
                        <Card.Img variant="top" src= {movie.Poster} />
                      ): null }
                          <Card.Body>
                              <Card.Title>{movie.Title}</Card.Title>   
                              <Card.Text>Genre: {movie.Genre}</Card.Text>
                              <Card.Text>Release Year: {movie.Year}</Card.Text>
                              <Card.Text>Average rating: {movie.averageRating}</Card.Text>
                              <NavigateButton text = "Visit Movie" route = {`/viewmovies/${movie._id}`}/>
                      </Card.Body>
              </Card>
        </div>
      );
    }
  })

  let editMovieForm = [];

  if (data.userType === "Contributing") {
    editMovieForm.push(
      <Form onSubmit = {handlePersonSubmit}>
        <Form.Control onChange = {handlePersonChange} name = "name" placeholder = "Enter name of person you want to add to movie" />
        <Button variant = "primary" type = "submit">Submit</Button>
      </Form>
    )
  } else {
    editMovieForm = [];
  }

  let displayMovieActors = [];
  
  data.movieActors.forEach(actor => {
    
    displayMovieActors.push(
      <div>
      <Card style={{ width: '18rem' }}>
          <Card.Body>
             <Card.Title>{actor.Name}</Card.Title>   
             <NavigateButton text = "Visit Actor Page" route = {`/viewActorPage/${actor._id}`}/>
             </Card.Body>
            </Card>
      </div>
    );
  })

  let displayMovieDirectors = [];
  
  data.movieDirector.forEach(director => {
    
    displayMovieDirectors.push(
      <div>
      <Card style={{ width: '18rem' }}>
          <Card.Body>
             <Card.Title>{director.Name}</Card.Title>   
             <NavigateButton text = "Visit Director Page" route = {`/viewActorPage/${director._id}`}/>
             </Card.Body>
            </Card>
      </div>
    );
  })

  let displayMovieWriters = [];
  
  data.movieWriter.forEach(writer => {
    
    displayMovieWriters.push(
      <div>
      <Card style={{ width: '18rem' }}>
          <Card.Body>
             <Card.Title>{writer.Name}</Card.Title>   
             <NavigateButton text = "Visit Writer Page" route = {`/viewActorPage/${writer._id}`}/>
             </Card.Body>
            </Card>
      </div>
    );
  })


  return (
    <div className = "body">
      
      <JumboTron fluid>
        <Container fluid>
          <Row>
            <Col xs = {4}>
                <Card >
                  <Card.Img className = "moviePoster" variant = "top" src = {data.posterLink} />
                </Card>
            </Col>

            <Col xs = {8}>
                <Card >
                  <Card.Body>
                    <Card.Title as = "h2"> {data.name}  </Card.Title>
                    <Card.Text> Release Year: {data.releaseYear} </Card.Text>
                    <Card.Text> Average Rating: {data.averageRating} </Card.Text>
                    <Card.Text> Run Time: {data.runTime} </Card.Text>
                    <Card.Text> Genres: {data.genres} </Card.Text>
                  </Card.Body>
                  <Card.Body>
                   {data.moviePlot}
                  </Card.Body>
                </Card>
               
                <Table responsive size = "sm" className = "producerTable">
                  <tbody>
                    <tr>
                    {displayMovieDirectors}
                    </tr>
                    
                    <tr>
                    {displayMovieWriters}
                    </tr>

                  </tbody>
                </Table>

                {editMovieForm[0]}

            </Col>
          </Row>
        </Container>
      </JumboTron>

      {displayMovieActors}

      

      <h1> Similar Movies </h1>
      <Row>
      {displaySimilarMovies}
      </Row>

      <Form className = "reviewForm" onSubmit = {handleSubmit}> 
        <Form.Group>
          <Form.Label>Leave a Review</Form.Label> 
          {ratingNumbers.map((number, index) => (

            <Form.Check value = {index + 1} name = "rating" onChange = {handleChange} className = "ratings" inline type = "radio" label = {number} /> 
          ))}

          <Form.Control placeholder = "Review Summary" name = "summary" onChange = {handleChange} as = "textarea" rows = "1" size = "sm" />
          <Form.Control placeholder = "Full Review" name = "fullReview" onChange = {handleChange} as = "textarea" rows = "5" size = "lg" />
        </Form.Group>
        <Button variant = "primary" type = "submit">Submit</Button>
      </Form>

      <Card className = "reviewForm">
        {movieReviews}
      </Card>

    </div>
  );
};

export default MovieView;
