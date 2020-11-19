const mongoose = require("mongoose")

let peopleSchema = mongoose.Schema({
    Role: String,
    Name: String,
    id:String
});

module.exports = mongoose.model('People', peopleSchema);


