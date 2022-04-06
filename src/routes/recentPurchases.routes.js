/*File: recentPurchases.routes.js
  Author:Ninad Nitin Shukla(B00863694)
  Purpose: Contains route to recently purchased items */
const express = require("express");
const router = express.Router();
const recentPurchasesController = require("../controller/recentPurchases.controller");

router.get("/api/recentpurchases/:email", recentPurchasesController.recentPurchases);

module.exports = router;
