import React, {useState, useEffect} from 'react';
import axios from 'axios';

import "./Search.css";
import { response } from 'express';

const Search = ({match}) => {

    const {
        params: {searchParam} 
    } = match;

    const [data, setData] = useState({
        name: "Movie",
        genre: "Genre",
        year: "Year",

        movieList: [
            {Title: "The Hobbit", Poster: "https://m.media-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_UY1200_CR90,0,630,1200_AL_.jpg"},
            {Title: "Lord Of The Rings", Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"},
            {Title: "Lord Of The Rings: The Two Towers", Poster: "https://upload.wikimedia.org/wikipedia/en/d/d0/Lord_of_the_Rings_-_The_Two_Towers_%282002%29.jpg"}
        ]

    });

    useEffect(() => {

        axios
        .get(`/movies?title=${searchParam}`)
        .then((response) => {
            setData({
                movieList: response.data.searchedMovies
            })
        }).catch(err => {
            
        });

    });

    const searchMovies = [];

    data.movieList.forEach(movie => {
        searchMovies.push(<img id="p1" src={movie.Poster} alt="moviePoster" />);
    });


    return (
        <div>
            {searchMovies}
        </div>
    );

}

export default Search; 