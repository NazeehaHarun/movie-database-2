const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const PORT = 5001;

//const publicRoute = require("../public/")
//app.use(express.static("../public"));

const moviesRoute = require("../api/handlers/movies");
const usersRoute = require("../api/handlers/users");
const peopleRoute = require("../api/handlers/people");

app.use('/movies', moviesRoute);
app.use('/users', usersRoute);
app.use('/people', peopleRoute);

app.listen(PORT, () => {
    console.log("Server running on port " + PORT); 
});



