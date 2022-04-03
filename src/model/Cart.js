/** 
 * @author Mitul Pravinbhai Malani (B00869519)  
 * Cart schema 
 **/

const mongoose = require("mongoose");

const Cart = new mongoose.Schema({
  email: String,
  books: Array,
});

module.exports = new mongoose.model("Cart", Cart);
