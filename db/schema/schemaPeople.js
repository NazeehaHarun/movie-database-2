const mongoose = require("mongoose")

let peopleSchema = mongoose.Schema({
    Role: String,
    Name: String,
    id:String,
    Description:String,
    C1:String,
    C2:String,
    C3:String,
    C4:String,
    C5:String,
    C6:String,
    Profile:String,
    M1:String,
    M2:String,
    M3:String
});

module.exports = mongoose.model('People', peopleSchema);


