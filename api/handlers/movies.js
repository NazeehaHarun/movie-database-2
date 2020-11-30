const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const movies = require("../functions/movies");
const Movie = require("../../db/schema/movieSchema");
const Review = require("../../db/schema/reviewSchema");

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
        console.log(queryObject);
        if (err) {
            
            res.status(400);
            return; 

        } else {
            console.log(result);
            movieList = result;
            res.status(200).json(movieList);
            return;
        }
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const search = movies.getMovieWithId(id);

    if (search !== null) {
        Movie.findById(id, function(err, result){
            if (err){
                res.status(400);
                return;
            }
            res.status(200).json(result);
        });
    } else {
        res.status(400); 
    }
   
})

router.post('/', (req, res) => {
    
    const movieObj = req.body;
    console.log(movieObj);
    
    let movie = movies.createMovie(movieObj);

    if (movie !== null) {
        let movie = new Movie({
            Title: movieObj.movie.title,
            Genre: movieObj.movie.genre,
            Year: movieObj.movie.year,
            averageRating: movieObj.movie.rating,

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
                
                const update = {movieReviews: result};

                Movie.findByIdAndUpdate(movieId, { $push: update}, function(err, result) {
                    if (err){
                        throw err; 
        
                    } else {        
                        res.status(200).json(result);
                        return;
        
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




router.put('/:id', putMovie); 

function putMovie (req,res){
    
    let flag =0;
    let movieId = req.params.id; //store id
    let movieObj = movies.getMovieWithId(movieId); //movie obj with the id
    const movieForm = req.body; //obj
    //let movie =JSON.stringify(movieForm);
    let i =0;
    movies.forEach(movieJS=>{
        if(movieJS.imdbID==movieId){
            movies[i]=movieForm;
            flag =1;
            res.status(200).json(movies[i]);
            //fs.writeFileSync("../../db/movie-data.json",movie);
        }
        i++
    
    });
    if(flag ===0){
        res.sendStatus(400);
    }
}

module.exports = router;