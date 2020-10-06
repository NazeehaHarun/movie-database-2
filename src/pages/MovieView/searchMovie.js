const movies = require("../../assets/movie-data.json");
console.log(movies);

export const searchMovie = (movieName) => {
    
    movies.forEach(movie => {

        if (movie.Title === movieName) {
            return movie; 
        }
    })

};

