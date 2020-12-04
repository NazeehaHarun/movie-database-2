import React, {useState} from 'react';
import "./AddPeople.css";
import {Button, Form, FormControl} from 'react-bootstrap'
import axios from 'axios';

const AddPeople = () => {

    return (
       
        <div className ="movie-form">

            <Form>
                <Form.Group>
                    <div className="movie">
                        <Form.Control id = "role" size ="lg" type="text" placeholder="Role" /> 
                        <br />
                        <Form.Control id = "name" size ="lg" type="text" placeholder="Name"/>
                        <br />
                        <Form.Control id = "description" size ="lg" type="text" placeholder="Description"/>
                        <br />
                        <Form.Control id = "c1" size ="lg" type="text" placeholder="Contributor 1"/>
                        <br />
                        <Form.Control id = "c2" size ="lg" type="text" placeholder="Contributor 2"/>
                        <br />
                        <Form.Control id = "c3" size ="lg" type="text" placeholder="Contributor 3"/>
                        <br />
                        <Form.Control id = "c4" size ="lg" type="text" placeholder="Contributor 4"/>
                        <br />
                        <Form.Control id = "c5" size ="lg" type="text" placeholder="Contributor 5"/>
                        <br />
                        <Form.Control id = "c6" size ="lg" type="text" placeholder="Contributor 6"/>
                        <br />
                        <Form.Control id = "profile" size ="lg" type="text" placeholder="link for profile picture"/>
                        <br />
                        <Form.Control id = "m1" size ="lg" type="text" placeholder="link for movie poster 1"/>
                        <br />
                        <Form.Control id = "m2" size ="lg" type="text" placeholder="link for movie poster 2"/>
                        <br />
                        <Form.Control id = "m3" size ="lg" type="text" placeholder="link for movie poster 3"/>
                        <br />
                      
                       
                    </div>
                    <div className="picture">
                        <Form.File id ="picture" label="Add a picture"/>
                    </div>
                    <div className="button">
                        <button id="button" onClick={add}>Submit</button>
            
                        
                    </div>
                
                </Form.Group>
            </Form>
            
        </div>

);}

function add(){
    
    
    //let pastWorks = document.getElementById("pastWorks").value;
    let role = document.getElementById("role").value;
    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;
    let id = document.getElementById("id").value;
    let c1 = document.getElementById("c1").value;
    let c2 = document.getElementById("c2").value;
    let c3 = document.getElementById("c3").value;
    let c4 = document.getElementById("c4").value;
    let c5 = document.getElementById("c5").value;
    let c6 = document.getElementById("c6").value;
    let profile = document.getElementById("profile").value;
    let m1 = document.getElementById("m1").value;
    let m2 = document.getElementById("m2").value;
    let m3 = document.getElementById("m3").value;


    let obj = { person: {

        "role":role,
        "name": name,
        "description":description,
        "id":id,
        "c1":c1,
        "c2":c2,
        "c3":c3,
        "c4":c4,
        "c5":c5,
        "c6":c6,
        "profile":profile,
        "m1":m1,
        "m2":m2,
        "m3":m3,
        /*
        "name":name,
        "pastWorks":pastWorks,
        "role":role,
        */
     
    }};
    /*
    let obj = { person: {

        "Role":role,
        "Name": name,
        "Description":description,
        "id":id,
        "C1":c1,
        "C2":c2,
        "C3":c3,
        "C4":c4,
        "C5":c5,
        "C6":c6,
        "Profile":profile,
        "M1":m1,
        "M2":m2,
        "M3":m3,
        /*
        "name":name,
        "pastWorks":pastWorks,
        "role":role,
        */
     
    //}};
    
    
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
      if(this.status ===200){
        console.log(xhttp.responseText);
        //return;
 
      } 
    };
    xhttp.open("POST","/people",true);
    xhttp.setRequestHeader("Content-Type","application/json");
    xhttp.send(JSON.stringify(obj));
    
}

export default AddPeople;