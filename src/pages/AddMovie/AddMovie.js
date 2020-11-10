import React from 'react';
import "./AddMovie.css";
import {Button, Form, FormControl} from 'react-bootstrap'
import axios from 'axios';



const   AddMovie = () => {
   
    return (
       
        <div className ="movie-form">

            <Form>
                <Form.Group>
                    <div className="movie">
                        <Form.Control id = "title" size ="lg" type="text" placeholder="Title of the movie" /> 
                        <br />
                        <Form.Control id = "genre" size ="lg" type="text" placeholder="Genre of the movie"/>
                        <br />
                        <Form.Control id = "year" size ="lg" type="text" placeholder="Release year"/>
                        <br />
                        <Form.Control id = "rating" size ="lg" type="text" placeholder="Movie Rating"/>
                        <br />
                        <Form.Control id = "id" size ="lg" type="text" placeholder="ID"/>
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
        
      
     
        

        

    

);

        



}

function add(){
    //console.log("hello");
    let title = document.getElementById("title").value;
    let genre = document.getElementById("genre").value;
    let year = document.getElementById("year").value;
    let rating = document.getElementById("rating").value;
    let id = document.getElementById("id").value;
    let obj ={"title":title,"genre":genre,"year":year,"rating":rating,"id":id};
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
      if(this.status ===200){
        console.log(xhttp.responseText);
        //return;
 
      }
    };
    xhttp.open("POST","http://localhost:5001/movies",true);
    xhttp.setRequestHeader("Content-Type","application/json");
    xhttp.send(JSON.stringify(obj));
    
}

    //document.getElementById("button").addEventListener("click", function(){
    //add();

//});

export default AddMovie;



/*
import React from 'react';
import "./AddMovie.css";
import {Button, Form, FormControl} from 'react-bootstrap'
import axios from 'axios';



const   AddMovie = () => {

    let handleSubmit =event =>{
        event.preventDefault();
        const movie ={
            title: this.state.title,
            genre: this.state.genre,
            year: this.state.year,
            rating: this.state.rating,
            id: this.state.id
        }
        axios.post('http://localhost:5001/movies',{movie})
        .then(res=>{
            console.log(res);
            console.log(res.data);
        })
    }
    
    let handleTitleChange =event =>{
        this.setState({title: event.target.value})
    }
    let handleGenreChange =event =>{
        this.setState({genre: event.target.value})
    }
    let handleYearChange =event =>{
        this.setState({year: event.target.value})
    }
    let handleRatingChange =event =>{
        this.setState({rating: event.target.value})
    }
    let handleIdChange =event =>{
        this.setState({id: event.target.value})
    }

    return (
       
        <div className ="movie-form">

            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <div className="movie">
                        <Form.Control size ="lg" type="text" placeholder="Title of the movie" onChange={handleTitleChange} /> 
                        <br />
                        <Form.Control size ="lg" type="text" placeholder="Genre of the movie" onChange={handleGenreChange}/>
                        <br />
                        <Form.Control size ="lg" type="text" placeholder="Release year" onChange={handleYearChange}/>
                        <br />
                        <Form.Control size ="lg" type="text" placeholder="Movie Rating" onChange={handleRatingChange}/>
                        <br />
                        <Form.Control size ="lg" type="text" placeholder="ID" onChange={handleIdChange}/>
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
*/