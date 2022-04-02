/** @author Mitul Pravinbhai Malani (B00869519)  */

const express = require("express");
const router = express.Router();

const cartController = require("../controller/cart.controller");

router.get("/api/cart", cartController.getUserCart);
router.post("/api/cart", cartController.upsertUserCart);

module.exports = router;
