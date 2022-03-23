/*

*/
const mongoose = require("mongoose");
const model = mongoose.model;
const Schema = mongoose.Schema;
const order = new Schema({
  bookName: String,
  bookId: String,
  purchaseDate: Date,
  _id: String,
  userId: String,
  amount: Number,
});
module.exports = model("Order", order);
