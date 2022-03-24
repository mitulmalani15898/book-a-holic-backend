//import express from "express";
// import {
//   getUsers,
//   addUser,
//   getUserById,
//   editUser,
//   deleteUser,
// } from "../controller/user-controller.js";

const express = require("express");
const route = express.Router();
const {
  getUsers,
  addUser,
  getUserById,
  editUser,
  deleteUser,
} = require("../controller/user-controller");

route.get("/api/", getUsers);

route.post("/api/add", addUser);
route.get("/api/:id", getUserById);
route.put("/api/:id", editUser);
route.delete("/api/:id", deleteUser);

//export default route;

module.exports = route;
