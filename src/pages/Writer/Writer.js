import React from 'react';
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



const Writer = () => {

    return (
        <div className ="main-sec3">
            <div className="top3">
                <div className ="main3">

                    <div className="intro-wrapper3">
                        <div className ="left3">
                        
                            <img id ="pa" src ={picturea} alt="" />;
                            
                            <div className="info3">
                                <p>Name: Stephen McFeely</p>
                                <p>Born: November 12, 1969, Contra Costa County, California, United States</p>
                                <p>Nominations: Hugo Award for Best Dramatic Presentation</p>
                            </div>
                        </div>

                        <div className ="right3">
                            <h1>Stephen McFeely</h1>
                            <div id="about3">
                            
                                <p>Stephen McFeely, 50, is an American screenwriter and producer. He is the third most
                                    successful screenwriters of all times in terms of U.S. box office reseipts.
                                </p>

                                <h4>Frequent collaborators</h4>
                                <ul>
                                    <li>Christopher Markus</li>
                                    <li>Tom Holland</li>
                                    <li>Anthony Russo</li>
                                    <li>Joe Russo</li>
                                    <li>Robert Downey, Jr.</li>
                                    <li>Chris Evans</li>
                                </ul>

                            </div>
                            <div className="But3">
                                <Button variant ="primary" size="lg" >
                                Follow
                                </Button>
                            </div>
                        
                        
                        </div>
                        
                    </div>
                    <h3>Known For</h3>
                        <div className="movies4">
                            <div>
                                <div className="post3">
                                    <img id ="pb" src ={pictureb} alt="moviePoster2" />;
                                </div>
                            </div>
                            <div>
                                <div className="post3">
                                    <img id ="pc" src ={picturec} alt="moviePoster2" />;
                                </div>
                            </div>
                            <div>
                                <div className="post3">
                                    <img id ="pd" src ={pictured} alt="moviePoster2" />;
                                </div>
                            </div>
                            <div>
                                <div className="post3">
                                    <img id ="pe" src ={picturee} alt="moviePoster2" />;
                                </div>
                            </div>
                            <div>
                                <div className="post3">
                                    <img id ="pf" src ={picturef} alt="moviePoster2" />;
                                </div>
                            </div>
                            <div>
                                <div className="post3">
                                    <img id ="pg" src ={pictureg} alt="moviePoster2" />;
                                </div>
                            </div>
                            <div>
                                <div className="post3">
                                    <img id ="ph" src ={pictureh} alt="moviePoster2" />;
                                </div>
                            </div>
                            <div>
                                <div className="post3">
                                    <img id ="pi" src ={picturei} alt="moviePoster2" />;
                                </div>
                            </div>
                        </div>
                    </div>
                
        </div>
                
                
        
    </div>
        

    

);

        



}

export default Writer;
