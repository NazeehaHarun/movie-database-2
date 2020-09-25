import React from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import JumboTron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";

import MoviePoster from "../../assets/images/WeatheringWithYouPoster.png";
import YourNamePoster from "../../assets/images/YourNameArt.jpg"

import './MovieView.css'

const MovieView = () => {
  return (
    <div className = "body">
      <JumboTron fluid>
        <Container fluid>
          <Row>
            <Col xs = {6}>
                <Card>
                  <Card.Img variant = "top" src = {MoviePoster} />
                </Card>
            </Col>

            <Col xs = {6}>
                <Card>
                  <Card.Body>
                    <Card.Title as = "h1"> Weathering With You </Card.Title>
                    <Card.Text> Release Year: 2019 </Card.Text>
                    <Card.Text> Average Rating: 8.0/10 </Card.Text>
                    <Card.Text> Run Time: 1h 51m </Card.Text>
                  </Card.Body>
                  <Card.Body>
                  A boy runs away to Tokyo and befriends a girl who appears to be able to manipulate the weather.
                  </Card.Body>
                </Card>
            </Col>
          </Row>
        </Container>
      </JumboTron>

      <h1> Similar Movies </h1>
      <Carousel>
        <Carousel.Item>
          <img src = {YourNamePoster}>
          </img>
          <Carousel.Caption>
          <Card>
          <Card.Title className = "h3" as = "h3"> Your Name </Card.Title>

          </Card>
          
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src = {YourNamePoster}>
          </img>
          <Carousel.Caption>
          <h3 class = "h3">Your Name</h3>
          
        </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>
  );
};

export default MovieView;
