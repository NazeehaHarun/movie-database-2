import React, {useState} from 'react';
import "./AddMovie.css";
import {Button, Form, FormControl} from 'react-bootstrap'
import axios from 'axios';

const AddMovie = () => {

    const [data, setData] = useState({
        title: "",
        genre: "",
        year: "",
        score: "",
        director: "",
        writer: "",
        actor: "",
        poster: ""
    })

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };  

    const handleSubmit = (event) => {
        event.preventDefault();

        let person = {

            person: {
                role: "Director",
                name: data.director,
            }
            
        }

        let createDirector = axios.post(`/people`, person);

        person = {
            person: {
                role: "Writer",
                name: data.writer,
                m1: data.title,
            }
        }

        let createWriter = axios.post(`/people`, person);

        person = {
            person: {
                role: "Actor",
                name: data.actor,
                m1: data.title,
            }
        }

        let createActor = axios.post(`/people`, person);

        let movie = {
            movie: {
                title: data.title,
                genre: data.genre,
                year: data.year,
                poster: data.poster,
                averageRating: data.score,
                m1: data.title,
            }
            
        }
        
        axios.all([createDirector, createWriter, createActor]).then(axios.spread((...responses) => {
            const responseOne = responses[0]
            const responseTwo = responses[1]
            const responseThree = responses[2]

            console.log(responseOne);
            console.log(responseTwo);
            console.log(responseThree);

            let director = responseOne.data._id;
            let writer = responseOne.data._id;
            let actors = responseOne.data._id;

            movie.movie.director = director;
            movie.movie.writer = writer;
            movie.movie.actors = actors;

            axios.post(`/movies`, movie)
            .then(response => {
                console.log(response);

            })
            .catch(err =>{ 
                console.log(err);
            })

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
                        <Form.Control name = "title" size ="lg" type="text" placeholder="Title of the movie" onChange = {handleChange}/> 
                        <br />
                        <Form.Control name = "genre" size ="lg" type="text" placeholder="Genre of the movie"onChange = {handleChange}/>
                        <br />
                        <Form.Control name = "year" size ="lg" type="text" placeholder="Release year" onChange = {handleChange}/>
                        <br />
                        <Form.Control name = "score" size ="lg" type="text" placeholder="Score" onChange = {handleChange}/>
                        <br />
                        <Form.Control name = "director" size ="lg" type="text" placeholder="Director" onChange = {handleChange}/>
                        <br />
                        <Form.Control name = "writer" size ="lg" type="text" placeholder="Writer" onChange = {handleChange}/>
                        <br />
                        <Form.Control name = "actor" size ="lg" type="text" placeholder="Actor" onChange = {handleChange}/>
                        <br />
                        <Form.Control name = "poster" size ="lg" type="text" placeholder="Poster Link" onChange = {handleChange}/>
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