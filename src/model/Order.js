const mongoose = require("mongoose");
const model = mongoose.model;
const Schema = mongoose.Schema;
const order = new Schema({
  bookName: {
    type: String,
    required: true,
  },
  bookId: {
    type: String,
    required: true,
  },
  purchaseDate: {
    type: Date,
  },
  email: {
    type: String,
  },
  amount: {
    type: Number,
  },
});

module.exports = model("Order", order);
