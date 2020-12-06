import React, {useState} from 'react';
import "./AddPeople.css";
import {Button, Form, FormControl} from 'react-bootstrap'
import axios from 'axios';

const AddPeople = () => {

    const [data, setData] = useState({
        name: "",
        role: "",
        pastWorks: [],
        image: ""    
    })

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };  

    const handleSubmit = (event) => {
        event.preventDefault();

        let pastWorksList = [];
        let i = 0
        axios.get(`/movies?title=${data.pastWorks}`)
            .then(response => {

                pastWorksList.push(response.data._id);

                //pastWorksList.push(response.data);
            }).catch(error => {
                console.log(error)
            })
        
        const person = {
            person: {
                name: data.name,
                role: data.role,
                pastWorks: data.pastWorksList,
                image: data.image
            }
        }

        axios.post(`/people`, person)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })

    };
 
    return (
       
        <div className ="movie-form">

            <Form onSubmit = {handleSubmit}>
                <Form.Group>
                    <div className="movie">
                        <Form.Control name = "name" size ="lg" type="text" placeholder="Name of Person" onChange = {handleChange}/> 
                        <br />
                        <Form.Control name = "role" size ="lg" type="text" placeholder="Role of Person (Director, Writer, or Actor)" onChange = {handleChange}/>
                        <br />
                        <Form.Control name = "pastWorks" size ="lg" type="text" placeholder="Past Works" onChange = {handleChange}/>
                        <br />
                        <Form.Control name = "image" size ="lg" type="text" placeholder="Link to Photo" onChange = {handleChange}/>
                        <br />

                       
                    </div>
                    <div className="button">
                        <button id="button" >Submit</button>
                    </div>
                
                </Form.Group>
            </Form>
            
        </div>

);}

export default AddPeople;