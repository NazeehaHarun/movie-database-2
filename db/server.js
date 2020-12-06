const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");


const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/movie-database", {useNewUrlParser: true}, {useUnifiedTopology: true})

mongoose.connection.on("error", console.error.bind(console, 'connection error:'));

app.use(cors());
app.use(express.json());

//New session created - secret should be secret
app.use(session ({secret: 'some session here', resave: true, saveUninitialized: true }));

app.use(express.urlencoded({extended: true}));

const PORT = 5001;

const moviesRoute = require("../api/handlers/movies");
const usersRoute = require("../api/handlers/users");
const peopleRoute = require("../api/handlers/people");
const loginRoute = require("../api/handlers/login");

const admin = require("../api/functions/auth");

app.use("/", (req, res, next) => {

    console.log(req.session);
    next();

});

app.use('/', loginRoute);
app.use('/movies', admin.auth, moviesRoute);
//app.use('/movies', moviesRoute);
app.use('/users', usersRoute);
app.use('/people', admin.auth, peopleRoute);
//app.use('/people', peopleRoute);

/*
app.listen(PORT, () => {
    console.log("Server running on port " + PORT); 
});
*/


mongoose.connection.once("open", function() {
    app.listen(PORT, () => {
        console.log("Server running on port " + PORT); 
    });

});

module.exports = app;




