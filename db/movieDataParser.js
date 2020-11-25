const movies = require("./movie-data.json");

const fs = require("fs");

let movieData = JSON.parse(fs.readFileSync("./movie-data.json").toString());
movieData.forEach(function(movie) {

    movie.Director = [];
    movie.Writer = [];
    movie.Actors = [];

});

fs.writeFileSync("./movie-data.json", JSON.stringify(movieData));