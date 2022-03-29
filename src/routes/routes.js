/** Author : JAINAM SHAH
 */



const express = require("express");
const route = express.Router();
const {
  getUsers,
  addUser,
  getUserById,
  editUser,
  deleteUser,
} = require("../controller/user-controller");

route.get("/api/users", getUsers);
route.post("/api/users/add", addUser);
route.get("/api/users/:id", getUserById);
route.put("/api/users/edit/:id", editUser);
route.delete("/api/users/delete/:id", deleteUser);

module.exports = route;


