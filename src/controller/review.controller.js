const reviews = require("../model/Reviews");
const url = require("url");
// API for adding book review.

const addReview = async (req, res) => {
  try {
    const bookReview = new reviews(req.body);
    const updateBook = await bookReview.save();
    res.status(200).send({ success: true, message:"Review added!" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getReview = async (req, res) => {
  try {
    const bookId = req.body.bookId;
    console.log(bookId);
    const response = await reviews.find({ bookId: bookId });
    console.log(response);
    res.status(200).send({
      success: true,
      data: response,
    });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

exports.addReview = addReview;
exports.getReview = getReview;
