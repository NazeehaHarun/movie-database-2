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
        Profile:"https://www.gstatic.com/tv/thumb/persons/303029/303029_v9_bb.jpg",
        M1:"https://upload.wikimedia.org/wikipedia/en/b/b7/The_Mummy_Returns_poster.jpg",
        M2:"https://resizing.flixster.com/Zdh9vCOYKFwrrzMCxRFmJZ1lHJE=/206x305/v2/https://flxt.tmsimg.com/assets/p19239_p_v8_ab.jpg",
        M3:"https://upload.wikimedia.org/wikipedia/en/b/b6/Jumanji_poster.jpg"

     
    });

    const [data, setData] = useState(initialState);
    
    useEffect(() => {
        axios.get(`/people/${directorId}`)
          .then((response) => {
            const peopleObj = response.data.result;
            setData({Role: peopleObj.Role, 
              Name: peopleObj.Name,
              //id: peopleObj.id,
              Description: peopleObj.Description,
              C1: peopleObj.C1,
              C2: peopleObj.C2,
              C3: peopleObj.C3,
              C4: peopleObj.C4,
              C5: peopleObj.C5,
              C6: peopleObj.C6,
              Profile:peopleObj.Profile,
              M1: peopleObj.M1,
              M2: peopleObj.M2,
              M3: peopleObj.M3
            });
            console.log(response.data.result);
          })
          .catch((error) => {
            console.log(error)
          });
      }, [directorId]);

    /*
    const [data, setData] = useState({
        name: "Joe Russo"
    })
    */
    

    return (
        <div className ="main-sec2">
            <div className="top2">
                <div className ="main2">

                    <div className="intro-wrapper2">
                        <div className ="left2">
                        
                            <img id ="paa" src ={data.Profile} alt="Joe Russo" />;
                            
                            <div className="info2">
                                <p className = "p">Name: {data.Name}</p>
                                <p className = "p">Role: {data.Role}</p>
                                <p className = "p">ID: {data.id}</p>
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

                            <FollowButton size = "lg" name = {data.name}/>
                        
                        
                        </div>
                        
                    </div>
                    <h3 className = "h3">Known For</h3>
                        <div className="movies2">
                            <div>
                                <div className="post2">
                                    <img id ="pab" src ={data.M1} alt="moviePoster" />;
                                </div>
                            </div>
                            <div>
                                <div className="post2">
                                    <img id ="pac" src ={data.M2} alt="moviePoster" />;
                                </div>
                            </div>
                            <div>
                                <div className="post2">
                                    <img id ="pad" src ={data.M3} alt="moviePoster" />;
                                </div>
                            </div>
                          
                        </div>
                    </div>
            
        </div>
           
    </div>
        

    

);

        



}

export default Director;
