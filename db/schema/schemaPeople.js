const mongoose = require("mongoose")

let peopleSchema = mongoose.Schema({
    Role: String,
    Name: String,

    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false,
    }],

    pastWorks:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
        required: false,
    }],

    collaborators: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
        required: false,
    }],

    Image: String,

});

module.exports = mongoose.model('People', peopleSchema);


