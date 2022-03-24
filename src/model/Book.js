const mongoose = require("mongoose");
const model = mongoose.model;
const Schema = mongoose.Schema;

const book = new Schema({
  _id:String,
  title: String,
  category: String,
  bookDescription: String,
  author: String,
  isbn: String,
  year: Number,
  price: Number,
  actualPrice:Number,
  imageUrl:String,
  bookUrl:String
});

module.exports = new model("Book", book);
