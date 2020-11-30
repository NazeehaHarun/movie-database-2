import React, {useState, useEffect} from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./SearchMovie.css"

import NavigateButton from "../../components/NavigateButton/NavigateButton";

const SearchMovie = ({match}) => {

    const {params: {searchParam}} = match;

    const [data, setData] = useState({
        searchParameter: {
            title: "",
            genre: "",
            personName: "",
        },
        movies: []
    }); 

    useEffect(() => {



    });

    return (
        <div className = "body">

        <Container>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" />
                        <Card.Body>
                            <Card.Title>Spirited Away</Card.Title>
                                
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" />
                        <Card.Body>
                            <Card.Title>Spirited Away</Card.Title>
                                
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" />
                        <Card.Body>
                            <Card.Title>Spirited Away</Card.Title>
                                
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                
                </Row>
            </Container>
            
        </div>
    );
};

export default SearchMovie;