const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const PORT = 5001;

const moviesRoute = require("../api/handlers/movies");
const usersRoute = require("../api/handlers/users");

app.use('/movies', moviesRoute);
app.use('/users', usersRoute);

app.listen(PORT, () => {
    console.log("Server running on port " + PORT); 
});



