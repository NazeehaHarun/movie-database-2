import React from 'react';
import {Card} from 'react-bootstrap';

const MovieView = () => {

    return (
        <div>
            <Card>
                <Card.Header as = "h1">Movie Title</Card.Header>
                <Card.Header as = "h5">Release Year</Card.Header>
                <Card.Header as = "h5"> Average Rating</Card.Header>
                <Card.Header as = "h5"> Run Time</Card.Header>

                <Card.Body>
                    <Card.Text>
                        Movie Plot 
                    </Card.Text>
        
                </Card.Body>
            </Card>

        </div>
    );

}

export default MovieView;

