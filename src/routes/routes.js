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

//route.get("/api/user", getUsers);
//export default route;
// route.get("/api/user/users", getUsers);
// route.post("/api/user/add", addUser);
// route.get("/api/user/:id", getUserById);
// route.put("/api/user/:id", editUser);
// route.delete("/api/user/:id", deleteUser);
