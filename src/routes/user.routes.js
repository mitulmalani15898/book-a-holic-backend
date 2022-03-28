/**
 * File: user.controller.js
 * Author: Abhinav Rawat (B00895691)
 * File Purpose: Contains user authentication routes
 */

const userController = require("../controller/user.controller");
const express = require("express");
const router = express.Router();

router.post("/api/user", userController.loginUser);
router.post("/api/user/add", userController.addUser);
router.post("/api/user/forgot/:email", userController.forgotUser);
router.post(
  "/api/user/recovery/:token/:userEmail",
  userController.recoveryUser
);

module.exports = router;
