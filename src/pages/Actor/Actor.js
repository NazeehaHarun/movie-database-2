import React from 'react';
import "./Actor.css";
import picture11 from './tom.jpg';
import picture12 from './home.jpg';
import picture13 from './far.jpg';
import picture14 from './civil.jpg';
import picture15 from './infinity.jpg';
import picture16 from './war.jpg';
import picture17 from './sea.jpg';
import {Button} from 'react-bootstrap'


const   Actor = () => {

    return (
        <div className ="main-sec1">
            <div className="top1">
                <div className ="main1">

                    <div className="intro-wrapper1">
                        <div className ="left1">
                        
                            <img id ="p11" src ={picture11} alt="Tom Holland" />;
                            
                            <div className="info1">
                                <p className = "p">Name: Thomas Stanley Holland (Actor)</p>
                                <p className = "p">Born: June 1, 1996, Kingston upon Thames, United Kingdom</p>
                                <p className = "p">Height: 1.73 m</p>
                                <p className = "p">Siblings: Harry Holland, Sam Holland, Paddy Holland</p>
                                <p className = "p">Parents: Dominic Holland, Nicola Elizabeth Frost</p>
                            </div>
                        </div>

                        <div className ="right1">
                            <h1 className = "h1">Tom Holland</h1>
                            <div id="about1">
                            
                                <p className = "p"> Thomas Stanley Holland is a 24 year old English Actor
                                    who began his career on stage in London's West End from 2008 to 
                                    2010. 
                                </p>
                                
                                <h4 className = "h4">Frequent collaborators</h4>
                                <ul className = "ul">
                                    <li>Jon Watts</li>
                                    <li>Joe Russo</li>
                                    <li>Anthony Russo</li>
                                    <li>Joe Russo</li>
                                    <li>Robert Downey, Jr.</li>
                                    <li>Chris Evans</li>
                                </ul>

                            </div>
                            <div className="But1">
                                <Button variant ="primary" size="lg" >
                                Follow
                                </Button>
                            </div>
                        
                        
                            </div>
        
                        </div>
                        <h3 className = "h3">Known For</h3>
                        <div className="movies1">
                            <div>
                                <div className="post1">
                                    <img id ="p12" src ={picture12} alt="moviePoster" />;
                                </div>
                            </div>
                            <div>
                                <div className="post1">
                                    <img id ="p13" src ={picture13} alt="moviePoster" />;
                                </div>
                            </div>
                            <div>
                                <div className="post1">
                                    <img id ="p14" src ={picture14} alt="moviePoster" />;
                                </div>
                            </div>
                            <div>
                                <div className="post1">
                                    <img id ="p15" src ={picture15} alt="moviePoster" />;
                                </div>
                            </div>
                            <div>
                                <div className="post1">
                                    <img id ="p16" src ={picture16} alt="moviePoster" />;
                                </div>
                            </div>
                            <div>
                                <div className="post1">
                                    <img id ="p17" src ={picture17} alt="moviePoster" />;
                                </div>
                            </div>
                    </div>
                
                </div>
                
            </div>
    </div>
        

    

);

        



}

export default Actor;
