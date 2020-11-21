
import React, {useState, useEffect} from 'react';
import "./Actor.css";
import picture11 from './tom.jpg';
import picture12 from './home.jpg';
import picture13 from './far.jpg';
import picture14 from './civil.jpg';
import picture15 from './infinity.jpg';
import picture16 from './war.jpg';
import picture17 from './sea.jpg';
import {Button} from 'react-bootstrap'
import FollowButton from '../../components/FollowButton/FollowButton';
import axios from 'axios';

const Actor = ({match}) => {
    const {params: {name}} = match;

    const initialState = ({ 
        Role: "Actor", 
        Name:"Tom Holland",
        id:"5",
        Description:"Thomas Stanley Holland is a 24 year old English actor who began his career on stage in London's West End from 2008 to 2010.",
        C1:"Jon Watts", 
        C2:"Joe Russo",
        C3:"Anthony Russo",
        C4:"Justin Russo",
        C5:"Robert Downey, Jr",
        C6:"Chris Evans",
        Profile:"https://www.refinery29.com/images/8981298.jpg",
        M1:"https://m.media-amazon.com/images/M/MV5BOGQ5YTM3YzctOTVmMC00OGIyLWFkZTYtMWYwOWZhMjA2MWMwXkEyXkFqcGdeQXVyMjUyMTE5MA@@._V1_.jpg",
        M2:"https://cdn.collider.com/wp-content/uploads/2019/03/spider-man-far-from-home-poster-london.jpg",
        M3:"https://i.insider.com/5ca3d2b892c8866e8b4618d9?width=750&format=jpeg&auto=webp"

     
    });

    const [data, setData] = useState(initialState);
    
    useEffect(() => {
        axios.get(`/people?name=${name}`)
          .then((response) => {
            const peopleObj = response.data.result;
            setData({Role: peopleObj.Role, 
              Name: peopleObj.Name,
              id: peopleObj.id,
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
      }, [name]);

      
    return (
        <div className ="main-sec1">
            <div className="top1">
                <div className ="main1">

                    <div className="intro-wrapper1">
                        <div className ="left1">
                        
                            <img id ="p11" src ={data.Profile} alt="Actor's image" />;
                            
                            <div className="info1">
                                <p className = "p">Name: {data.Name}</p>
                                <p className = "p">Role: {data.Role}</p>
                                <p className = "p">ID: {data.id}</p>
                            
                            </div>
                        </div>

                        <div className ="right1">
                            <h1 className = "h1">{data.Name}</h1>
                            <div id="about1">
                            
                                <p className = "p"> {data.Description}</p>
                                
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
                        <div className="movies1">
                            <div>
                                <div className="post1">
                                    <img id ="p12" src ={data.M1} alt="moviePoster" />;
                                </div>
                            </div>
                            <div>
                                <div className="post1">
                                    <img id ="p13" src ={data.M2} alt="moviePoster" />;
                                </div>
                            </div>
                            <div>
                                <div className="post1">
                                    <img id ="p14" src ={data.M3} alt="moviePoster" />;
                                </div>
                            </div>
                         
                    </div>
                
                </div>
                
            </div>
    </div>
        

    

);

        



}

export default Actor;