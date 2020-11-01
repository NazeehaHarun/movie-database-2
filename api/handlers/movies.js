const express = require("express");
const router = express.Router();

const movies = require("../functions/movies");

/**
 * @route GET /movies
 * returns movies under supplied parameters (returns all movies if no parameters are supplied)
 */
router.get('/', (req, res) => {

    const title = req.query.title;
    const genre = req.query.genre;
    const year = req.query.year;
    const minrating = req.query.minrating; 

    const searchedMovies = movies.getMovies({title, genre, year, minrating});

    if (searchedMovies !== null) {
        res.status(200).json({searchedMovies});
        return;
    }

    //Returns a response of bad request if movie is not found
    res.sendStatus(400);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const search = movies.getMovieWithId(id);

    if (search !== null) {
        res.status(200).json({search});
        return;
    }

    res.status(400); 
})

router.post('/', (req, res) => {

    const movieObj = req.body.movie;
    const movie = movies.createMovie(movieObj);

    if (movie !== null) {
        res.status(200).json({movie});
        return;
    }

    res.sendStatus(400);

});

router.post('/review', (req, res) => {

    const reviewObj = req.body.review;
    const review = movies.leaveReview(reviewObj);
    console.log(review);

    if (review !== null) {
        res.status(200).json({review});
        return;
    }

    res.sendStatus(400);
});

module.exports = router;