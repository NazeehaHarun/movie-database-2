import React from 'react';
import "./AddMovie.css";
import {Button, Form, FormControl} from 'react-bootstrap'



const   AddMovie = () => {

    return (
       
        <div className ="movie-form">

            <Form>
                <Form.Group>
                    <div className="movie">
                        <Form.Control size ="lg" type="text" placeholder="Title of the movie" /> 
                        <br />
                        <Form.Control size ="lg" type="text" placeholder="Genre of the movie"/>
                        <br />
                        <Form.Control size ="lg" type="text" placeholder="Release year"/>
                        <br />
                        <Form.Control size ="lg" type="text" placeholder="Movie Rating"/>
                        <br />
                        <Form.Control size ="lg" type="text" placeholder="Director of the Movie"/>
                        <br />
                        <Form.Control size ="lg" type="text" placeholder="Writer of the movie"/>
                        <br />
                        <Form.Control size ="lg" type="text" placeholder="Main actor in the movie"/>
                        <br />
                    </div>
                    <div className="picture">
                        <Form.File id ="picture" label="Add a movie poster"/>
                    </div>
                    <div className="button">
                        <Button variant="info" id="button" block>Submit</Button>
                    </div>
                
                </Form.Group>
            </Form>
        </div>
        
      
     
        

        

    

);

        



}

export default AddMovie;
