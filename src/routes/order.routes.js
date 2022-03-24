const express = require("express");
const router = express.Router();
const orderController = require("../controller/order.controller");

/*
API Design
GET /orders - get orders for a particular user
*/

router.get("/api/orders/:id", (req, res) => {
  res.status(200).json({ success: true });
});
router.get("/api/orders", orderController.getUserOrders);

module.exports = router;
  