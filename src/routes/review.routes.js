const reviewController = require("../controller/review.controller");
const express = require("express");
const router = express.Router();

router.post("/api/book/addReview", reviewController.addReview);
router.get("/api/book/getReviews", reviewController.getReview);

module.exports = router;
