const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({

    movie: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Movie"
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },

    rating: {
        type: Number,
        required: true,
    },

    summary: {
        type: String,
        required: true,
    },

    fullReview: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Review", reviewSchema);