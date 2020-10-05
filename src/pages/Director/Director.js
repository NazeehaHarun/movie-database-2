import React from 'react';
import "./Director.css";
import pictureaa from './joe.jpg';
import pictureab from './captain.jpg';
import pictureac from './civil.jpg';
import picturead from './infinity.jpg';
import pictureae from './endgame.png';
import {Button} from 'react-bootstrap'



const Director = () => {

    return (
        <div className ="main-sec2">
            <div className="top2">
                <div className ="main2">

                    <div className="intro-wrapper2">
                        <div className ="left2">
                        
                            <img id ="paa" src ={pictureaa} alt="Joe Russo" />;
                            
                            <div className="info2">
                                <p>Name: Joseph Russo</p>
                                <p>Born: July 18, 1971, Cleveland, Ohio, United States</p>
                                <p>Nominations: Hugo Award for Best Dramatic Presentation</p>
                                <p>Siblings: Anthony Russo</p>
                                <p>Parents: Basil Russo, Patricia Russo</p>
                            </div>
                        </div>

                        <div className ="right2">
                            <h1>Joe Russo</h1>
                            <div id="about2">
                            
                                <p>Joseph Russo, 49, is an American director and producer
                                    best known for directing the four films in the Marvel Cinematic Universe.
                                </p>

                                <h4>Frequent collaborators</h4>
                                <ul>
                                    <li>Jon Watts</li>
                                    <li>Tom Holland</li>
                                    <li>Anthony Russo</li>
                                    <li>Joe Russo</li>
                                    <li>Robert Downey, Jr.</li>
                                    <li>Chris Evans</li>
                                </ul>

                            </div>
                            <div className="But2">
                                <Button variant ="primary" size="lg" >
                                Follow
                                </Button>
                            </div>
                        
                        
                        </div>
                        
                    </div>
                    <h3>Known For</h3>
                        <div className="movies2">
                            <div>
                                <div className="post2">
                                    <img id ="pab" src ={pictureab} alt="moviePoster" />;
                                </div>
                            </div>
                            <div>
                                <div className="post2">
                                    <img id ="pac" src ={pictureac} alt="moviePoster" />;
                                </div>
                            </div>
                            <div>
                                <div className="post2">
                                    <img id ="pad" src ={picturead} alt="moviePoster" />;
                                </div>
                            </div>
                            <div>
                                <div className="post2">
                                    <img id ="pae" src ={pictureae} alt="moviePoster" />;
                                </div>
                            </div>
                        </div>
                    </div>
            
        </div>
           
    </div>
        

    

);

        



}

export default Director;
