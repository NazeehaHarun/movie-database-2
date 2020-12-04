import React, {useState} from 'react';
import "./AddMovie.css";
import {Button, Form, FormControl} from 'react-bootstrap'
import axios from 'axios';

const AddMovie = () => {

    const [data, setData] = useState({
        title: "",
        genre: "",
        year: "",
        director: "",
        writer: "",
        actor: "",
        poster: ""
    })

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };  

    const handleSubmit = (event) => {
        
        let person = {
            role: "Director",
            name: data.director,
        }

        let createDirector = axios.post(`/people`, person);

        person = {
            role: "Writer",
            name: data.writer,
        }

        let createWriter = axios.post(`/people`, person);

        person = {
            role: "Actor",
            name: data.actor,
        }

        let createActor = axios.post(`/people`, person);

        let movie = {
            title: data.title,
            genre: data.genre,
            year: data.year,
            poster: data.poster
        }

        //let formRequest = axios.post(`/movies`, movie); 
        
        axios.all([createDirector, createWriter, createActor]).then(axios.spread((...responses) => {
            const responseOne = responses[0]
            const responseTwo = responses[1]
            const responseThree = responses[2]

            console.log(responseOne);
            console.log(responseTwo);
            console.log(responseThree);

            //const responesFour = responses[3]

            // use/access the results 
          })).catch(errors => {
            // react on errors.
            console.log(errors);
          })

    };
 
    return (
       
        <div className ="movie-form">

            <Form onSubmit = {handleSubmit}>
                <Form.Group>
                    <div className="movie">
                        <Form.Control id = "title" size ="lg" type="text" placeholder="Title of the movie" onChange = {handleChange}/> 
                        <br />
                        <Form.Control id = "genre" size ="lg" type="text" placeholder="Genre of the movie"onChange = {handleChange}/>
                        <br />
                        <Form.Control id = "year" size ="lg" type="text" placeholder="Release year" onChange = {handleChange}/>
                        <br />
                        <Form.Control id = "director" size ="lg" type="text" placeholder="Director" onChange = {handleChange}/>
                        <br />
                        <Form.Control id = "writer" size ="lg" type="text" placeholder="Writer" onChange = {handleChange}/>
                        <br />
                        <Form.Control id = "actor" size ="lg" type="text" placeholder="Actor" onChange = {handleChange}/>
                        <br />
                        <Form.Control id = "poster" size ="lg" type="text" placeholder="Poster Link" onChange = {handleChange}/>
                        <br />
                       
                    </div>
                    <div className="button">
                        <button id="button" >Submit</button>
                    </div>
                
                </Form.Group>
            </Form>
            
        </div>

);}

export default AddMovie;