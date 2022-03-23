const mongoose = require("mongoose");
const model = mongoose.model;
const Schema = mongoose.Schema;

const book = new Schema({
  _id:String,
  title: String,
  categoryId: Number,
  bookDescription: String,
  authors: [
    {
      type: String,
    },
  ],
  isbn: String,
  year: Number,
  price: Number,
  imageUrl:String,
  bookUrl:String
});

module.exports = new model("Book", book);
