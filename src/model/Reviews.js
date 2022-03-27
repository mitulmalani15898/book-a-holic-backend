const mongoose = require("mongoose");

const reviewModel = new mongoose.Schema({
  bookId:{
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model("reviews", reviewModel);
