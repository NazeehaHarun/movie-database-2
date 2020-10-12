const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const PORT = 5000;

const moviesRoute = require("../api/movies");

app.use('/api/movies', moviesRoute);

app.listen(PORT, () => {
    console.log("Server running on port " + PORT); 
})





