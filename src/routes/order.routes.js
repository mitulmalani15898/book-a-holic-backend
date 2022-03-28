/**
 * File: order.routes.js
 * Author: Yashvi Gulati (B00900339)
 * File Purpose: Contains routes for orders
 */

const express = require("express");
const router = express.Router();
const orderController = require("../controller/order.controller");

router.get("/api/orders/:email", orderController.getUserOrderHistory);

module.exports = router;
  