const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },

    Type: {
        type: String,
        required: true, 
    },

    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false,
    }],

    followingUsers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false,
    }],

    followingPeople: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false, 
    }],
    
    recommendedMovies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
        required: false
    }], 

    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false,
    }],
});

module.exports = mongoose.model("User", userSchema);