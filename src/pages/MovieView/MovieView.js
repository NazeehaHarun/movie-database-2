import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import JumboTron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table"; 
import Header from "../../components/Header/Header";

import MoviePoster from "../../assets/images/WeatheringWithYouPoster.png";
import YourNamePoster from "../../assets/images/YourNameArt.jpg"

import './MovieView.css'
import { Tab } from "react-bootstrap";

import {searchMovie} from "./searchMovie";

const MovieView = () => {

  const [data, setData] = useState({
    name: "Weathering With You", 
    releaseYear: "2019", 
    averageRating: "8.0",
    runTime: "1h 51m",
    moviePlot: "A boy runs away to Tokyo and befriends a girl who appears to be able to manipulate the weather.",
  })

  return (
    <div className = "body">
      <Header />

      <JumboTron fluid>
        <Container fluid>
          <Row>
            <Col xs = {4}>
                <Card >
                  <Card.Img className = "moviePoster" variant = "top" src = {MoviePoster} />
                </Card>
            </Col>

            <Col xs = {8}>
                <Card >
                  <Card.Body>
                    <Card.Title as = "h1"> {data.name} </Card.Title>
                    <Card.Text> Release Year: {data.releaseYear} </Card.Text>
                    <Card.Text> Average Rating: {data.averageRating} </Card.Text>
                    <Card.Text> Run Time: {data.runTime} </Card.Text>
                  </Card.Body>
                  <Card.Body>
                   {data.moviePlot}
                  </Card.Body>
                </Card>

                <Table responsive size = "sm" className = "producerTable">
                  <tbody>
                    <tr>
                    <td> Director </td>
                    <td>  Makoto Shinkai </td>
                    </tr>
                    
                    <tr>
                    <td> Writer </td>
                    <td> Makoto Shinkai </td>
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

    </div>
  );
};

export default MovieView;
