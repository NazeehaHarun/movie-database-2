let person= require("./people-data.json")

let People= require("./schemaPeople.js")


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


 });

 
//console.log(person);

