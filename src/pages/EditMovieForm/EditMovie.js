import React, {useState} from 'react';
import "./EditMovie.css";
import {Button, Form, FormControl} from 'react-bootstrap'
import axios from 'axios';

const EditMovie = () => {

    return (
       
        <div className ="movie-form">

            <Form>
                <Form.Group>
                    <div className="movie">
                        <Form.Control id = "title" size ="lg" type="text" placeholder="Title of the movie you want to edit" /> 
                        <br />
                        <Form.Control id = "genre" size ="lg" type="text" placeholder="Genre of the movie"/>
                        <br />
                        <Form.Control id = "year" size ="lg" type="text" placeholder="Release year"/>
                        <br />
                        <Form.Control id = "rating" size ="lg" type="text" placeholder="Movie Rating"/>
                        <br />
                        
                       
                    </div>
                    <div className="picture">
                        <Form.File id ="picture" label="Add a movie poster"/>
                    </div>
                    <div className="button">
                        <button id="button" onClick={add}>Submit</button>
            
                        
                    </div>
                
                </Form.Group>
            </Form>
            
        </div>

);}

function add(){
    
    let title = document.getElementById("title").value;
    let genre = document.getElementById("genre").value;
    let year = document.getElementById("year").value;
    let rating = document.getElementById("rating").value;
    
    let obj = { movie: {
        "title":title,
        "genre":genre,
        "year":year,
        "rating":rating
        
    }};
    
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
      if(this.status ===200){
        console.log(xhttp.responseText);
        //return;
 
      } 
    };
    xhttp.open("PUT","/movies",true);
    xhttp.setRequestHeader("Content-Type","application/json");
    xhttp.send(JSON.stringify(obj));
    
}

export default EditMovie;