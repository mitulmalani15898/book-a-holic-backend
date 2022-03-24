const userController = require('../controller/user.controller');
const express = require('express');
const router = express.Router();


router.get("/api/user", userController.getUser);
router.post("/api/user/add", userController.addUser);
router.get("api/user/recovery/:email", userController.forgotUser)

module.exports = router;