/**
 * File: User.js
 * Author: Abhinav Rawat (B00895691)
 * File Purpose: User Model
 */

const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
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
    default: "",
    required: false,
  },
  preferences: {
    type: String,
    default: "",
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

module.exports = mongoose.model("User", userModel);
