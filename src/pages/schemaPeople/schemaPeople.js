const mongoose = require("mongoose")

let peopleSchema = mongoose.Schema({
    Role: {type: String, required:true},
    Name: {type: String, required:true},
    id:{type: String, required:true},
    Description:{type: String, required:true},
    C1:{type: String, required:true},
    C2:{type: String, required:true},
    C3:{type: String, required:true},
    C4:{type: String, required:true},
    C5:{type: String, required:true},
    C6:{type: String, required:true},
    Profile:{type: String, required:true},
    M1:{type: String, required:true},
    M2:{type: String, required:true},
    M3:{type: String, required:true}
});

module.exports = mongoose.model('People', peopleSchema);


