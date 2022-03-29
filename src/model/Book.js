/** @author Prit Thakkar (B00890731) */
const mongoose = require("mongoose");
const model = mongoose.model;
const Schema = mongoose.Schema;
/**
 * The book schema built using mongoose
 */
const book = new Schema({
  _id:String,
  title: String,
  category: String,
  bookDescription: String,
  author: String,
  isbn: String,
  year: String,
  price: Number,
  actualPrice:Number,
  imageUrl:String,
  bookUrl:String
});

module.exports = new model("Book", book);
