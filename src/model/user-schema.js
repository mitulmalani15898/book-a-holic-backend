/** Author : JAINAM SHAH
 */


const mongoose = require("mongoose");
const autoincrement = require("mongoose-auto-increment");
const model = mongoose.model;
const Schema = mongoose.Schema;

const userSchema = Schema({
 
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    default: null,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    default: null,
    required: false,
  },
  preferences: {
    type: String,
    default: null,
    required: false,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});


const user = mongoose.model("user", userSchema);


module.exports = user;
