const express = require("express");
const router = express.Router();
const movies = require("../db/movie-data.json");

router.post('/getMovie', (req, res) => {
    const { movieTitle } = req.body;
    console.log(movieTitle);

    movies.forEach((movie) => {

        if (movie.Title === movieTitle) {
            //Returns movie as a JSON object if found        
            return res.json( { movie });
        }
    });
    //Returns a response of bad request if movie is not found
    res.sendStatus(400);
});

module.exports = router;