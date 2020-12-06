import React, {useState, useEffect} from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Form from "react-bootstrap/Form";

import axios from "axios";

import "./SearchMovie.css"

import NavigateButton from "../../components/NavigateButton/NavigateButton";

const SearchMovie = () => {

   // const {params: {searchParam}} = match;

    const [data, setData] = useState({
            title: "",
            genre: "",
            year: "",
            minrating: "", 
            personName: "",
    }); 

    const [movies, setMovies] = useState({
        movieData: [
            {
                Title: "Spirited Away",
                Genre: "Anime",
                Year: "2001",
                minrating: "10",
                Poster: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
                _id: "",
            },
            {
                Title: "Spirited Away",
                Genre: "Anime",
                Year: "2001",
                minrating: "10",
                Poster: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
                _id: "",
            },

            {
                Title: "Spirited Away",
                Genre: "Anime",
                Year: "2001",
                minrating: "10",
                Poster: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
                _id: "",
            }
        ]
    })

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(data);
        axios.get(`/movies?title=${data.title}&genre=${data.genre}&year=${data.year}&minrating=${data.minrating}`)
        .then((response => {
            
            const movieListResponse = response.data.slice(0, 3);
            console.log(movieListResponse)
            setMovies({
                movieData: movieListResponse
            })
            //console.log(movies.movieData[0]);
        }))
        .catch(err =>{
            console.log(err);
        });
    }

   let displayMovies = [];
    console.log(movies.movieData);

   movies.movieData.forEach(movie => {
       console.log(movie);
        displayMovies.push(
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

    return (
        <div className = "body">
            <Col xs = {6}>
            
            <Form onSubmit = {handleSubmit}>
                <Form.Label as = "h3">Search for a Movie</Form.Label>
                <Form.Control name = "title" placeholder = "Movie Title" onChange = {handleChange}/>
                <Form.Control name = "genre" placeholder = "Movie Genre" onChange = {handleChange}/>
                <Form.Control name = "year" placeholder = "Movie Year" onChange = {handleChange}/>
                <Form.Control name = "minrating" placeholder = "Movie Minimum Average Rating" onChange = {handleChange}/>

                <Button variant = "primary" type = "submit">Search</Button>
            </Form>
            </Col>

        <Container classname = "movieContainer">
            <Row>
                <Col>
                    {displayMovies[0]}
                </Col>

                <Col>
                    {displayMovies[1]}
                </Col>
                
                <Col>
                    {displayMovies[2]}
                </Col>
                
                </Row>
            </Container>
            
        </div>
    );
};

export default SearchMovie;