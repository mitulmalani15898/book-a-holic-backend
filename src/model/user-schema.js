// import mongoose from "mongoose";
// import autoincrement from "mongoose-auto-increment";

const mongoose = require("mongoose");
const autoincrement = require("mongoose-auto-increment");
const model = mongoose.model;
const Schema = mongoose.Schema;

const userSchema = Schema({
  firstName: String,
  lastName: String,
  email: String,
});

autoincrement.initialize(mongoose.connection);
userSchema.plugin(autoincrement.plugin, "user");
const user = mongoose.model("user", userSchema);

//export default user;
//module.exports = model("user", userSchema);
module.exports = user;
