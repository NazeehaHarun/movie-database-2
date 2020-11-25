let person= require("./people-data.json")

let People= require("../db/schema/schemaPeople");

let user = require("./users-data.json");
let User = require("../db/schema/userSchema");

let movie = require("./movie-data.json");
let Movie = require("../db/schema/movieSchema");

const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/movie-database", {useNewUrlParser: true})

mongoose.connection.on("error", console.error.bind(console, 'connection error:'));


mongoose.connection.once("open", function() { 
    let db= mongoose.connection.db;
    
    People.insertMany(person,function(err,result){
        
        if(err){
            throw err;
        }
        console.log(result);
    });

    User.insertMany(user, function(err, result) {

        if (err) {
            throw err; 
        }
        console.log(result);
    });
    
    Movie.insertMany(movie, function(err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
    });

 });

 
//console.log(person);

