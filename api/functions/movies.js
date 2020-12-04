const movies = require("../../db/movie-data.json");
const Movie = require("../../db/schema/movieSchema");
const {v4: uuidv4} = require("uuid");

const getMovies = (searchParameters) => {
    
    let queryObject = {}

    if (searchParameters.title) {
        
        queryObject.Title = searchParameters.title;
    }

    if (searchParameters.genre) {

        queryObject.Genre = searchParameters.genre;
    }

    if (searchParameters.year) {
        queryObject.Year = searchParameters.year;
    }

    if (searchParameters.minRating) {
        queryObject.averageRating = searchParameters.minRating;
    }

    return queryObject;
};

const getMovieWithId = (movieId) => {

    if (movieId == null) {
        return null;
    } else {
        return movieId;
    }

}

const createMovie = (movieObj) => {

    
    //Ensures movie has minimum informated before being created

    if (!movieObj.movie.title || !movieObj.movie.genre || !movieObj.movie.year) {
        return null;
    }

    return movieObj;

}

const leaveReview = (review) => {
    
    //Ensure the review has all necessary information 
    if (!review.rating || !review.summary || !review.fullReview) {
        return null;
    }

    return review;

}

module.exports = {getMovies, getMovieWithId, createMovie, leaveReview}; 
