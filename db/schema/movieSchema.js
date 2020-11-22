const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
    Title: {
        type: String,
        required: true,
    },
    Genre: [{
        type: String,
        required: true, 
    }],
    Year: {
        type: Number,
        required: true,
    },
    averageRating: {
        type: Number,
        required: false,
    },
    Runtime: {
        type: String,
        required: true,
    },
    Plot: {
        type: String,
        required: true,
    },
    Director: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false, 
        ref: "People",
    }],

    Writer: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "People",
    }],
    Actor: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "People",
    }],

    movieReviews: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "Review"
    }],

    Poster: [{
        type: String,
        required: false,
    }]
});

module.exports = mongoose.model("Movie", movieSchema);