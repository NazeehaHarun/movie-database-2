const movies = require("../../db/movie-data.json");
const moviesShort = require("../../db/movie-data-short.json");
const {v4: uuidv4} = require("uuid")

const getMovies = (searchParameters) => {
    
    let movieList = [];

    //If no parameters were supplied --> Return all the movies
    if (!searchParameters.title && !searchParameters.genre && !searchParameters.year && !searchParameters.minRating) {
        moviesShort.forEach(movie => {
            movieList.push(movie);
        });

        return movieList;
    }

    movies.forEach(movie => {

        if (searchParameters.title !== undefined) {
            if (movie.Title === searchParameters.title) {
                
                movieList.push(movie); 
            }
        } 
        else if (searchParameters.genre !== undefined) {
            if (movie.Genre.includes(searchParameters.genre)) {
                
                movieList.push(movie);
            }
        }
        else if (searchParameters.year !== undefined) {
            if (movie.Year === searchParameters.year) {
                
                movieList.push(movie);
            }
        }

        else {
            if (searchParameters.minRating !== undefined) {
                if (movie.minRating > searchParameters.minRating && movieList.includes(movie) !== true) {
                    movieList.push(movie);
                }
            }
        }
    });

    

    return movieList;
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

    if (!movieObj.title || !movieObj.genre || !movieObj.year) {
        return null;
    }

    const movie = {
        id: uuidv4(),
        Title: movieObj.title,
        Genre: movieObj.genre,
        Year: movieObj.year
    }
    console.log(movie);

    return movie;

}

const leaveReview = (review) => {

    //Ensure the review has all
    if (!review.movieTitle && !review.rating && !review.reviewSummary && !review.fullReview) {
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

            console.log(review);
            return review;

        }
    });

    return null;

}

module.exports = {getMovies, getMovieWithId, createMovie, leaveReview}; 
