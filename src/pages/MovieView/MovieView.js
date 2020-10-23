import React, {useState, useEffect} from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import JumboTron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table"; 
import Header from "../../components/Header/Header";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";


import axios from 'axios';

import MoviePoster from "../../assets/images/WeatheringWithYouPoster.png";
import YourNamePoster from "../../assets/images/YourNameArt.jpg"

import './MovieView.css'

//import {searchMovie} from "./searchMovie";

const MovieView = ({match}) => {
  
  const {params: {movieTitle}} = match;

  const initialState = ({
    name: "Weathering With You", 
    releaseYear: "2019", 
    averageRating: "8.0",
    runTime: "1h 51m",
    genres: "Anime, Romance, Fantasy",
    moviePlot: "A boy runs away to Tokyo and befriends a girl who appears to be able to manipulate the weather.",
    director: "Makoto Shinkai",
    writer: "Makoto Shinkai",
    posterLink: MoviePoster
  });

  const [data, setData] = useState(initialState);

  const ratingNumbers = [1,2,3,4,5,6,7,8,9,10];

  useEffect(() => {
    axios.get(`http://localhost:5001/movies?title=${movieTitle}`)
      .then((response) => {
        const movieObj = response.data.searchedMovies[0];
        setData({name: movieObj.Title, 
          releaseYear: movieObj.Year, 
          runTime: movieObj.Runtime, 
          genres: movieObj.Genre, 
          moviePlot: movieObj.Plot, 
          posterLink: movieObj.Poster,
          director: movieObj.Director,
          writer: movieObj.Writer,
        });
        console.log(response.data.searchedMovies[0]);
      })
      .catch((error) => {
        console.log(error)
      });
  }, [movieTitle]);


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
                    <td> Director </td>
                    <td>  {data.director} </td>
                    </tr>
                    
                    <tr>
                    <td> Writer </td>
                    <td> {data.writer} </td>
                    </tr>

                  </tbody>
                </Table>

            </Col>
          </Row>
        </Container>
      </JumboTron>

      <Table striped border hover responsive size = "sm">
        <thead>
          <tr>
            <th>Role</th>
            <th>Actor</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Hodoka Morishima
              </td>
              <td>
                Kotaro Daigo
              </td>
            </tr>

          </tbody>
        
      </Table>

      

      <h1> Similar Movies </h1>
      <Carousel className = "carousel">
        <Carousel.Item>
          <Card >
            <Card.Img variant = "bottom" src = {YourNamePoster}/>
            <Card.Body>
              <Card.Title> Your Name</Card.Title>
              
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card >
            <Card.Img variant = "bottom" src = {YourNamePoster}/>
            <Card.Body>
              <Card.Title> Your Name</Card.Title>
              
            </Card.Body>
          </Card>
        </Carousel.Item>

      </Carousel>

      <Form className = "reviewForm"> 
        <Form.Group>
          <Form.Label>Leave a Review</Form.Label> 
          {ratingNumbers.map((number, index) => (

            <Form.Check className = "ratings" inline type = "radio" label = {number} /> 
          ))}
          
          <Form.Control  as = "textarea" rows = "5" size = "lg" />
        </Form.Group>
      </Form>

      <Card className = "reviewForm">
        <Card.Title as = "h5">
            Fantastic Movie [10/10]
        </Card.Title>
        <Card.Text>
        Makoto Shinkai has truly created another masterpiece. 
        </Card.Text>
      </Card>

    </div>
  );
};

export default MovieView;
