import React, {useState,useEffect} from 'react';
import "./Writer.css";
import picturea from './stephen.jpg';
import pictureb from './captain.jpg';
import picturec from './civil.jpg';
import pictured from './infinity.jpg';
import picturee from './avengers.jpg';
import picturef from './endgame.png';
import pictureg from './narnia1.jpg';
import pictureh from './narnia2.jpg';
import picturei from './narnia3.jpg';
import {Button} from 'react-bootstrap';
import FollowButton from '../../components/FollowButton/FollowButton';
import axios from 'axios';


const Writer = ({match}) => {
    const {params: {writerId}} = match;

    const initialState = ({ 
        
        Role: "Writer", 
        Name:"Stephen McFeely",
        id:"3",
        Description:"Stephen McFeely, 50, is an American screenwriter and producer. He is the third most successful screenwriters of all times in terms of U.S. box office reseipts.",
        C1:"Brad Pitt", 
        C2:"Emma Watson",
        C3:"Anthony Russo",
        C4:"Justin Russo",
        C5:"Robert Downey, Jr",
        C6:"Chris Evans",
        Profile:"https://photos.geni.com/p13/96/0b/3b/d9/53444847bff51f98/stephen_mcfeely_original.jpg",
        M1:"https://upload.wikimedia.org/wikipedia/en/b/b7/The_Mummy_Returns_poster.jpg",
        M2:"https://resizing.flixster.com/Zdh9vCOYKFwrrzMCxRFmJZ1lHJE=/206x305/v2/https://flxt.tmsimg.com/assets/p19239_p_v8_ab.jpg",
        M3:"https://upload.wikimedia.org/wikipedia/en/b/b6/Jumanji_poster.jpg"
     
    });

    const [data, setData] = useState(initialState);
    
    useEffect(() => {
        axios.get(`/people/${writerId}`)
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
      }, [writerId]);

    /*
    const [data, setData] = useState({
        name: "Stephen McFeely"
    })
    */

    return (
        <div className ="main-sec3">
            <div className="top3">
                <div className ="main3">

                    <div className="intro-wrapper3">
                        <div className ="left3">
                        
                            <img id ="pa" src ={data.Profile} alt="" />;
                            
                            <div className="info3">
                                <p className = "p">Name: {data.Name}</p>
                                <p className = "p">Role: {data.Role}</p>
                                <p className = "p">ID: {data.id}</p>
                            </div>
                        </div>

                        <div className ="right3">
                            <h1 className = "h1">{data.Name}</h1>
                            <div id="about3">
                            
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
                            <FollowButton size="lg" name={data.name} peopleId = {writerId} />
                        
                        </div>
                        
                    </div>
                    <h3 className = "h3">Known For</h3>
                        <div className="movies4">
                            <div>
                                <div className="post3">
                                    <img id ="pb" src ={data.M1} alt="moviePoster2" />;
                                </div>
                            </div>
                            <div>
                                <div className="post3">
                                    <img id ="pc" src ={data.M2} alt="moviePoster2" />;
                                </div>
                            </div>
                            <div>
                                <div className="post3">
                                    <img id ="pd" src ={data.M3} alt="moviePoster2" />;
                                </div>
                            </div>
                          
                            
                          
                         
                        </div>
                    </div>
                
        </div>
                
                
        
    </div>
        

    

);

        



}

export default Writer;
