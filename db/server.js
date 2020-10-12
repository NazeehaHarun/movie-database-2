const express = require("express");
const app = express();
const cors = require("cors");
const movies = require("./movie-data.json");

app.use(cors());
app.use(express.json());

const PORT = 5000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT); 
})


app.post('/getMovie', (req, res) => {
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
})


