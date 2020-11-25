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

movieSchema.statics.findByTitle = function(title, callback) {
    this.find({Title: title}, callback);
}

movieSchema.statics.findByGenre = function(genre, callback) {
    this.find({Genre: genre}, callback);
}

movieSchema.statics.findByYear = function(year, callback) {
    this.find({Year: year}, callback);
}

movieSchema.statics.findByRating = function(rating, callback) {
    this.find({averageRating: rating}, callback);
}

module.exports = mongoose.model("Movie", movieSchema);