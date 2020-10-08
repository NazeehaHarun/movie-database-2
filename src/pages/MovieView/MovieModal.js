import React, {useState} from 'react';

import {Modal, Button} from 'react-bootstrap';
import "./MovieView.css"

const MovieModal = (props) => {
    const [activate, setActivate] = useState(true);

    let movieObject = {}
    movieObject = props.movie.movie;
    console.log(movieObject);
    
    let initialState =  {
        name: "Weathering With You", 
        releaseYear: "2019", 
        averageRating: "8.0",
        runTime: "1h 51m",
        genres: "Anime, Romance, Fantasy",
        moviePlot: "A boy runs away to Tokyo and befriends a girl who appears to be able to manipulate the weather.",
    }
    const [data, setData] = useState(initialState);

    if (movieObject !== undefined) {
        
        initialState.name = movieObject.Title;
        initialState.releaseYear = movieObject.Year;
        initialState.averageRating = movieObject.imdbRating;
        initialState.runTime = movieObject.Runtime;
        initialState.genres = movieObject.Genre;
        initialState.moviePlot = movieObject.Plot; 

        console.log(initialState);

        setData(initialState); 
        
    } 

    const closeModal = () => {
        setActivate(false);
    }

    const openModal = () => {
        setActivate(true);
    }

    return (
        <div>
            <Modal.Dialog >
            <Modal show = {activate}>
                <Modal.Header >
                <Modal.Title closeButton>
                <h3 className = "modalText">{data.name}</h3>
                </Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
                    <p>Release Year {data.releaseYear}</p>
                    <p>Average Rating {data.averageRating}</p>
                    <p>Runtime {data.runTime}</p>
                    <p>Genre {data.genres}</p>
                    <p>Plot {data.moviePlot}</p>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick = {closeModal}>Close</Button>

                </Modal.Footer>
            </Modal>
            </Modal.Dialog>
        </div>
    );
}

export default MovieModal;