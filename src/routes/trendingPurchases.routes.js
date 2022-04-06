/*File: trendingPurchases.routes.js
Author:Ninad Nitin Shukla(B00863694)
Purpose: Routes to trendingPurchases
*/
const express = require("express");
const router = express.Router();
const trendingPurchasesController = require("../controller/trendingPurchases.controller");

router.get("/api/trendingpurchases", trendingPurchasesController.trendingPurchases);

module.exports = router;
