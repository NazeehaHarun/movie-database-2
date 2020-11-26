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

    movies.forEach(movie => {
        if (movie.hasOwnProperty(id)) {
            if(movie.id === movieId) {
                return movie;
            }
        }
    });

    return null; 

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
    if (!review.movieTitle || !review.rating || !review.reviewSummary || !review.fullReview) {
        return null;
    }

    movies.forEach(movie => {
        if (movie.Title === review.movieTitle) {

            //Here, a new array needs to be created since no data is actually saved everytime the server is run, and thus the array won't be saved in the object
            //When the database is added to save the data, the movie can simply be pushed to the database 

            movie.userReview = [];
            movie.userReview.push(review);

            //Change movie minRating if necessary - Again, since no data is saved, I must initialize minrating in the movie to some random value (5) to compare against. When the database is added, it will simply compare with whatever rating value is saved in that particular movie

            movie.minRating = 5;  
            if (review.rating < movie.minRating) {
                movie.minRating = review.rating;
            }

            //Calculate averageRating
            let averageRating = 0;
            let count = 0;
            movie.userReview.forEach(reviewObj => {

                averageRating += reviewObj.rating;
                count += 1; 
            });

            movie.averageRating = (averageRating/count);

            //Console.log(movie) below verifies that review has been added to the movie object
            console.log(movie); 

        }
    });

    return review;

}

module.exports = {getMovies, getMovieWithId, createMovie, leaveReview}; 
