const express = require("express");
const router = express.Router();

const movies = require("../functions/movies");
const Movie = require("../../db/schema/movieSchema");

/**
 * @route GET /movies
 * returns movies under supplied parameters (returns all movies if no parameters are supplied)
 */
router.get('/', (req, res) => {

    const title = req.query.title;
    const genre = req.query.genre;
    const year = req.query.year;
    const minrating = req.query.minrating; 

    const movieList = movies.getMovies({title, genre, year, minrating});

    if (movieList.length === 0) {
        //Returns a response of bad request if movie is not found
        res.status(400);
        return; 
    } else {
        res.status(200).json(movieList);
        return; 
    }    
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

//router.put('/:id', putMovie); 
/*
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
*/
router.put('/', (req, res) => {
    
    const movie = req.body.movie;
    console.log(movie);

        Movie.findOne({Title:movie.title})
        .exec(function(err,result) {
            if (err) {
                res.status(500);
                return; 
            }

            result.Title = movie.title;
            result.Genre = movie.genre;
            result.Year = movie.year;
            result.averageRating= movie.averageRating;
            
                console.log(result);
                result.save(function(err, result){
                    if (err) {
                        res.status(500);
                        return; 
                    }
                    console.log("Movie UPDATED");
                    console.log("Inside function");
                    console.log(result);
                    res.status(200).json({movie});
                    return;
        
                });
            
          

        });
        
     
});




module.exports = router;