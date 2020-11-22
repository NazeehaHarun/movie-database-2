const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    genre: [{
        type: String,
        required: true, 
    }],
    releaseYear: {
        type: Number,
        required: true,
    },
    averageRating: {
        type: Number,
        required: true,
    },
    runtime: {
        type: Number,
        required: true,
    },
    plot: {
        type: String,
        required: true,
    },
    directors: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false, 
        ref: "People",
    }],

    writers: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "People",
    }],
    actors: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "People",
    }],

    movieReviews: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "Review"
    }],

    moviePoster: [{
        type: String,
        required: false,
    }]
});

module.exports = mongoose.model("Movie", movieSchema);