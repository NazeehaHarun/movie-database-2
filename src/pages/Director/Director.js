import React, {useState,useEffect} from 'react';
import "./Director.css";
import pictureaa from './joe.jpg';
import pictureab from './captain.jpg';
import pictureac from './civil.jpg';
import picturead from './infinity.jpg';
import pictureae from './endgame.png';
import {Button} from 'react-bootstrap'
import FollowButton from '../../components/FollowButton/FollowButton';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import NavigateButton from "../../components/NavigateButton/NavigateButton";

const Director = ({match}) => {

    const {params: {directorId}} = match;

    const initialState = ({ 

        Role: "Director", 
        Name:"Joe Russo",
        id:"1",
        Description:"Joseph Russo, 49, is an American director and producer best known for directing the four films in the Marvel Cinematic Universe.",
        C1:"Stephen McFeely", 
        C2:"Tom Holland",
        C3:"Anthony Russo",
        C4:"Justin Russo",
        C5:"Robert Downey, Jr",
        C6:"Chris Evans",
        Image:"https://www.gstatic.com/tv/thumb/persons/303029/303029_v9_bb.jpg",
        M1:"https://upload.wikimedia.org/wikipedia/en/b/b7/The_Mummy_Returns_poster.jpg",
        M2:"https://resizing.flixster.com/Zdh9vCOYKFwrrzMCxRFmJZ1lHJE=/206x305/v2/https://flxt.tmsimg.com/assets/p19239_p_v8_ab.jpg",
        M3:"https://upload.wikimedia.org/wikipedia/en/b/b6/Jumanji_poster.jpg",
        pastWorks: [],
        collaborators: [],

     
    });

    const [data, setData] = useState(initialState);
    
    useEffect(() => {
        axios.get(`/people/${directorId}`)
        .then((response) => {
          const peopleObj = response.data.result;

          axios.get(`/people/${directorId}/movies`)
          .then(response => {

              const pastMovies = response.data;

              setData({Role: peopleObj.Role, 
                  Name: peopleObj.Name,
                  pastWorks: pastMovies,
                  Image: peopleObj.Image, 
                });
          })
          .catch(error => {
              console.log(error);
          });
        })
        .catch((error) => {
          console.log(error)
        });
    }, [directorId]);



    let displayMovies = [];

    data.pastWorks.forEach(movie => {
        displayMovies.push(
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src= {movie.Poster} />
            <Card.Body>
             <Card.Title>{movie.Name}</Card.Title>   
             <NavigateButton text = "Visit Movie" route = {`/viewActorPage/${movie._id}`}/>
             </Card.Body>
            </Card>
        );

    });

    let displayCollaborators = [];

    data.collaborators.forEach(collaborator => {
      let route = "";
      if (collaborator.Type === "Actor") {
          route = "viewActorPage";
      }
      else if (collaborator.Type === "Director") {
          route = "viewDirectorPage";
      }
      else if (collaborator.Type === "Writer") {
          route = "viewWriterType";
      }

      displayCollaborators.push(
          <Card style={{ width: '18rem' }}>
          <Card.Body>
           <Card.Title>{collaborator.Name}</Card.Title>   
           <NavigateButton text = "Visit Collaborator" route = {`/${route}/${collaborator._id}`}/>
           </Card.Body>
          </Card>
        );

    });

    return (
        <div className ="main-sec2">
            <div className="top2">
                <div className ="main2">

                    <div className="intro-wrapper2">
                        <div className ="left2">
                        
                            <img id ="paa" src ={data.Image} alt="Joe Russo" />;
                            
                            <div className="info2">
                                <p className = "p">Name: {data.Name}</p>
                                <p className = "p">Role: {data.Role}</p>
                            </div>
                        </div>

                        <div className ="right2">
                            <h1 className = "h1">{data.Name}</h1>
                            <div id="about2">
                            
                                <p className = "p">{data.Description}
                                </p>

                                <h4 className = "h4">Frequent collaborators</h4>
                                <ul className = "ul">
                                    <li>{data.C1}</li>
                                    <li>{data.C2}</li>
                                    <li>{data.C3}</li>
                                    <li>{data.C4}</li>
                                    <li>{data.C5}</li>
                                    <li>{data.C6}</li>
                                </ul>

                            </div>

                            <FollowButton size="lg" name={data.name} peopleId = {directorId} />
                        
                        
                        </div>
                        
                    </div>
                    <h3 className = "h3">Known For</h3>
                    {displayMovies}
                    </div>
            
        </div>
           
    </div>
        

    

);

        



}

export default Director;
