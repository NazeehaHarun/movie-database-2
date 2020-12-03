const mongoose = require("mongoose")

let peopleSchema = mongoose.Schema({
    Role: String,
    Name: String,
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
    M3:String,

    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false,
    }],

});

module.exports = mongoose.model('People', peopleSchema);


