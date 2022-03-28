const express = require("express");
const router = express.Router();
const orderController = require("../controller/order.controller");

router.get("/api/orders/:email", orderController.getUserOrderHistory);

module.exports = router;
  