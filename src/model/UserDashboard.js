const mongoose = require("mongoose");
const model = mongoose.model;
const Schema = mongoose.Schema;

const BookSchema = mongoose.Schema({
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
const userDashBoard = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
    favoritebooks:{type:[BookSchema]},
    borrowedbooks:{type:[BookSchema]}

})
module.exports = model("UserDashboard", userDashBoard);
