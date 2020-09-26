import React from 'react';
import "./Profile.css";
import {navItems} from "./navItems";
import picture from './shirt2.jpg';
import picture2 from './hp.jpg';
import picture3 from './lor.jpg';
import picture4 from './hunger.jpg';
import picture5 from './spider.jpg';
import picture6 from './gravity.jpg';
import picture7 from './interstellar.jpeg';

const Profile = () => {

    return (
        <section className ="main-sec">
            <section className="top">
                <div className ="main">
                    
                    <div className="intro">
                        <nav className="navi-wrapper">
                            
                            <ul>
                                {navItems.map((item,index)=>{
                                    return(
                                        <li key ={index}>
                                            <a className ={item.nclass}href={item.url}>
                                             {item.title}   
                                            </a>
                                        </li>
                                    )
                                })}
                                
                                
                            </ul>
                            
                           
                    
                        </nav>

                    </div>
                    <div className ="welcome">
                        <h1>Welcome to your world of movies</h1>
                    </div>

                    <div className ="left-column">
                        
                    </div>

                    <div className ="right-column">
                        <div id ="preview">
                        </div>
                        
                    </div>
                </div>
            </section>
            
            <section className="middle">
                <div className ="main2">
                    <h3>Top 3 recommended movies based on your previous searches</h3>
                    <div className="movies">
                        <div>
                            <div className="post">
                                <img id ="p1" src ={picture2} alt="moviePoster" />;
                            </div>
                        </div>
                        <div>
                            <div className="post">
                                <img id ="p2" src ={picture3} alt="moviePoster" />;
                            </div>
                        </div>
                        <div>
                            <div className="post">
                                <img id ="p3" src ={picture4} alt="moviePoster" />;
                            </div>
                        </div>
                    </div>
                </div>


            </section>
            
            <section className="bottom">
                <div className ="main3">
                    <h3>Latest movies streaming</h3>
                    <div className="movies">
                        <div>
                            <div className="post">
                                <img id ="p4" src ={picture5} alt="moviePoster" />;
                            </div>
                        </div>
                        <div>
                            <div className="post">
                                <img id ="p5" src ={picture6} alt="moviePoster" />;
                            </div>
                        </div>
                        <div>
                            <div className="post">
                                <img id ="p6" src ={picture7} alt="moviePoster" />;
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </section>
        

    );

}

export default Profile;
