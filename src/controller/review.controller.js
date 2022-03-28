const reviews = require("../model/Reviews");
const url = require("url");

const addReview = async (req, res) => {
  try {
    const bookReview = new reviews(req.body);
    console.log(req.body);
    const updateBook = await bookReview.save();
    console.log(updateBook);
    res.status(200).send({ success: true, message: "Review added!" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getReview = async (req, res) => {
  try {
    const queryObject = url.parse(req.url, true).query;
    const bookId = queryObject.bookId;
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
