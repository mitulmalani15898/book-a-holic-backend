/** @author Mitul Pravinbhai Malani (B00869519)  */

const url = require("url");

const Cart = require("../model/Cart");

/**
 * get specific user's cart value
 * @param {*} HTTP request
 * @param {*} HTTP response
 */
const getUserCart = async (req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const email = queryObject.email;

  if (!email) {
    return res.status(400).send({
      message: "Please provide email address.",
      success: false,
    });
  }

  try {
    const userCart = await Cart.find({ email });
    if (userCart.length) {
      return res.status(200).send({
        success: true,
        message: "User cart retrived",
        books: userCart[0].books,
      });
    } else {
      return res
        .status(404)
        .send({ success: true, message: "User cart retrived", books: [] });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

/**
 * insert or update user's cart value
 * @param {*} HTTP request
 * @param {*} HTTP response
 */
const upsertUserCart = async (req, res) => {
  const reqBody = req.body;
  const email = reqBody.email;
  const books = reqBody.books;

  if (!email) {
    return res.status(400).send({
      message: "Please provide email address.",
      success: false,
    });
  }
  if (!books) {
    return res.status(400).send({
      message: "Please provide user's cart books.",
      success: false,
    });
  }

  try {
    const updatedCart = await Cart.updateOne(
      { email },
      { books },
      { upsert: true }
    );
    return res.status(200).send({
      success: updatedCart.acknowledged,
      count: updatedCart.modifiedCount,
      message: "User cart updated",
    });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

module.exports = {
  getUserCart,
  upsertUserCart,
};
