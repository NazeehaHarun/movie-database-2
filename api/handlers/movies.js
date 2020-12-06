const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const movies = require("../functions/movies");
const Movie = require("../../db/schema/movieSchema");
const Review = require("../../db/schema/reviewSchema");
const User = require("../../db/schema/userSchema");
const peopleModel = require("../../db/schema/schemaPeople");

const admin = require("../functions/auth");
const people = require("../functions/people");

/**
 * @route GET /movies
 * returns movies under supplied parameters (returns all movies if no parameters are supplied)
 */
router.get('/', (req, res) => {

    const title = req.query.title;
    const genre = req.query.genre;
    const year = req.query.year;
    const minrating = req.query.minrating; 

    const queryObject = movies.getMovies({title, genre, year, minrating});
    let movieList = [];

    Movie.find(queryObject, function(err, result) {
        
        if (err) {
            
            res.status(400);
            return; 

        } else {
            
            movieList = result;
            res.status(200).json(movieList);
            return;
        }
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const search = movies.getMovieWithId(id);
    console.log(req.params.id);

    Movie.findById(req.params.id, function(err, result){
        if (err){
            res.status(400).send("Movie cannot be found");
            console.log(err.message);
            return;
            
        } else {
            let movie = JSON.parse(JSON.stringify(result));
            const reviewId = result.movieReviews;

            //reviewId is a list
            Review.find({"_id": { $in: reviewId}}, function(err, result) {
                if (err) {
                    throw err;
                    
                } else {
                    movie.User = req.session.user.Type;
                    const reviews = result;
                    movie.reviews = reviews;
                    res.status(200).json({movie});
                }
            });
        }
    });
   
});

router.get('/:id/similar', (req, res) => {

    const id = req.params.id;
    console.log(req.params.id);

    Movie.findById(id, function(err, result) {

        if (err) {
            throw err;
        } else {

            const genres = result.Genre; 
            let searchObj = {};
            searchObj.Genre = {$in: genres};

            Movie.find(searchObj, function(err, result){
                if (err) {
                    throw err;
                } else {
                    res.status(200).send(result);
                    return;
                }
            });
        }

    });
});

router.post('/', admin.contributor, (req, res) => {
    
    const movieObj = req.body;
    console.log(movieObj);
    
    let movie = movies.createMovie(movieObj);

    if (movie !== null) {
        let movie = new Movie({
            Title: movieObj.movie.title,
            Genre: movieObj.movie.genre,
            Year: movieObj.movie.year,
            averageRating: movieObj.movie.rating,
            Director: movieObj.movie.director,
            Writer: movieObj.movie.writer,
            Actors: movieObj.movie.actors,
            Poster: movieObj.movie.poster

        });

        Movie.findOne({Title: movieObj.movie.title})
        .then(foundMovie => {
            
            if (foundMovie) {
                res.status(400).send("Movie already exists");
            } 
            else {

                movie.save(function(err, result){

                    if (err) {
                        throw err; 
                    }
        
                    res.status(200).json({movie});
                    return;
        
                });

            }

        });
        
    } else {
        res.status(400).send("Missing Data on Form");
    }
});

router.put('/:movie/review', (req, res) => {

    const movieId = req.params.movie;

    const reviewObj = req.body.review;
    const review = movies.leaveReview(reviewObj);
    

    if (review !== null) {
        
        const newReview = new Review(review);
        newReview.user = req.session.user._id; 
        newReview.movie = movieId;

        newReview.save(function(err, result) {
            if (err) {
                throw err;

            } else {
                
                const savedReview = result;
                const update = {movieReviews: result};

                Movie.findByIdAndUpdate(movieId, { $push: update}, {new: true}, function(err, result) {
                    if (err){
                        throw err; 
        
                    } else {        

                        const movieObj = result;
                        let average = movieObj.averageRating;
                        let numReviews = movieObj.movieReviews.length;
                        let update = {};
                        if (numReviews === 0) {

                            update = {averageRating: newReview.rating};
                        
                        } else {
                            
                            let newAverage = ((average * numReviews) + newReview.rating)/(numReviews+1);
                            update = {averageRating: newAverage};
                        }
                        Movie.findByIdAndUpdate(movieId, {$set: update}, function(err, result) {
                            
                            if (err) {
                                throw err; 
                            } else {

                                const update = {reviews: savedReview._id}
                                User.findByIdAndUpdate(req.session.user._id, {$push: update}, function(err, result) {
                                    
                                    if (err) {  
                                        throw err; 
                                    
                                    } else {
                                       
                                        res.status(200).json(movieObj);
                                        return;
                                    }

                                });

                            }

                        });
                    }
                });
            }
        });

    } else {
        res.sendStatus(400);
        return;
    }

});

router.get('/:movie/review', (req, res) => {

    const movieId = req.params.movie;

    if (movieId !== null) {
        
        Movie.findById(movieId, function(err, result) {

            if (err) {
                throw err;
            } else {

                const foundMovie = result;
                const reviews = foundMovie.movieReviews;
                
                Review.find({"_id": { $in: reviews}}, function(err, result) {
                    if (err) {
                        throw err;
                    } else {
                        res.status(200).json(result);
                    }
                });
            }

        });

    } else {
        res.sendStatus(400);
        return;
    }

});

router.get('/:movie/people', (req, res) => {

    const movieId = req.params.movie;

    Movie.findById(movieId, function(err, result) {
        if (err) {
            throw err;
        } else {
            let movie = result;
            
            let peopleId = [];

            for (director of movie.Director) {
                peopleId.push(director);
            }

            for (writer of movie.Writer) {
                peopleId.push(writer);
            }

            for (actor of movie.Actors) {
                peopleId.push(actor);
            }
            let searchObj = {}
            searchObj._id = {$in: peopleId};

                peopleModel.find(searchObj, function(err, result){
                    if (err) {
                        res.status(200).send("People not found with movie");
                        return;
                    } else {
                        res.status(200).send(result);
                        return;
                    }
                });
        }
    });

});


router.put("/:movie", (req, res) => {

    const movieId = req.params.movie;
    const name = req.query.name;
    
    let update = {pastWorks: movieId};

    peopleModel.findOneAndUpdate({Name: name}, {$push: update} , function(err, result) {
        
        if (err) {
            throw err; 
        } else {

            if (result === null) {
                res.status(400).send("Person not found")
                return;

            } else {
                console.log(result);
                const personRole = result.Role;
                let update = {};

                if (personRole === "Actor") {
                    update = {Actors: result._id};
                } else if (personRole === "Director") {
                    update = {Director: result._id};
                } else if (personRole === "Writer") {
                    update = {Writer: result._id};
                }

                Movie.findByIdAndUpdate(movieId, {$push: update}, function(err, result){

                    if (err) {
                        throw err;
                    } else {
                        res.status(200).send(result);
                        return; 
                    }

                });
            }
        }

    });

});

module.exports = router;