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

route.get("/api/user", getUsers);
route.post("/api/user/add", addUser);
route.get("/api/user/:id", getUserById);
route.put("/api/user/:id", editUser);
route.delete("/api/user/:id", deleteUser);

//export default route;

module.exports = route;
