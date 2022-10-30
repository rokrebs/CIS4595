const mongoose = require('mongoose');

// Review schema (tbd)
const reviewSchema = new mongoose.Schema({
  review: {
    type: String,
  },
});

const reviewModel = mongoose.model('Review', reviewSchema);

module.exports = reviewModel;
