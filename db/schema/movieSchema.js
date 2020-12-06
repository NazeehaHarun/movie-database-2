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
        type: String,
        required: true,
    },
    averageRating: {
        type: Number,
        required: false,
        default: 0
    },
    Runtime: {
        type: String,
        required: false,
    },
    Plot: {
        type: String,
        required: false,
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
    Actors: [{
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