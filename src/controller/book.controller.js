/**
 *  @author Prit Thakkar (B00890731)
 *  @author Mitul Pravinbhai Malani (B00869519)
 * */

const path = require("path");
const uuid = require("uuid");
const url = require("url");

const Book = require("../model/Book");
const { updateOne } = require("../model/Order");

/**
 * @param {*} req - the http request received
 * @param {*} res - the http response to be sent
 * Used to add book to the database
 */
const addBook = async (req, res) => {
  const files = req.files;
  let response = [];
  if (req.body === null) {
    res.status(400).json({
      success: true,
      message: "Book cannot cannot be empty",
      data: bookList,
    });
  }
  try {
    const book = constructBookObject(files, req);
    book._id = uuid.v4();
    const savedBook = await book.save();
    response.push(savedBook);
    res
      .status(200)
      .json({ success: true, message: "Book(s) Added", data: response });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * @param {*} req - the http request received
 * @param {*} res - the http response to be sent
 * Used to add books to the database
 */
const addBulkBookData = async (req, res) => {
  const bookList = req.body.books;
  let response = [];
  if (bookList === null || bookList.length === 0) {
    res.status(400).json({
      success: true,
      message: "Books list cannot be empty",
      data: bookList,
    });
  }
  try {
    for (bookIndex in bookList) {
      const book = new Book(bookList[bookIndex]);
      book._id = uuid.v4();
      console.log(book._id);
      const savedBook = await book.save();
      response.push(savedBook);
    }
    res
      .status(200)
      .json({ success: true, message: "Book(s) Added", data: response });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * @param {*} req - the http request received
 * @param {*} res - the http response to be sent
 * Used to get books from database
 */
const getAllBooks = async (req, res) => {
  try {
    const queryObject = url.parse(req.url, true).query;
    const searchText = queryObject.search;
    let categories = queryObject.categories;
    let searchResponse = [],
      filterResponse = [];

    // search by author name or book title
    if (searchText) {
      const searchRegex = new RegExp(searchText, "i");
      searchResponse = await Book.find({
        $or: [{ author: searchRegex }, { title: searchRegex }],
      });
    }
    // filter by categories
    if (categories) {
      categories = JSON.parse(queryObject.categories);
      filterResponse = await Book.find({ category: { $in: categories } });
    }

    if (searchText || categories) {
      return res.status(200).send({
        success: true,
        message: "Filtered Books",
        data: [...searchResponse, ...filterResponse].filter(
          (item, i, arr) => i === arr.findIndex((t) => t._id === item._id)
        ),
      });
    } else {
      const response = await Book.find({});
      return res
        .status(200)
        .send({ success: true, message: "All Books", data: response });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

/**
 * @param {*} req - the http request received
 * @param {*} res - the http response to be sent
 * Used to get a book by a book id
 */
const getBookById = async (req, res) => {
  try {
    const response = await Book.find({ _id: req.params.id });
    res
      .status(200)
      .json({ success: true, message: "Book retrieved", data: response });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * @param {*} req - the http request received
 * @param {*} res - the http response to be sent
 * Used to update book details in the database
 */

const updateOneBook = async (req, res) => {
  try {
    const files = req.files;
    const book = constructBookObject(files, req);
    delete book._id;
    const updatedResult = await Book.updateOne({ _id: req.body._id }, book, {
      upsert: true,
    });
    res.status(200).json({
      success: updatedResult.acknowledged,
      message: "Book Updated",
      count: updatedResult.modifiedCount,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * @param {*} req - the http request received
 * @param {*} res - the http response to be sent
 * Used to delete a book from the database
 */
const deleteOneBook = async (req, res) => {
  try {
    const book = await Book.deleteOne({ _id: req.params.id });
    res.status(200).json({
      success: book.acknowledged,
      message: "Deleted entry",
      count: book.count,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * @param {*} req - the http request received
 * @param {*} res - the http response to be sent
 * Used to send a pdf as a response after payment
 */
const downloadBookPdf = async (req, res) => {
  try {
    const response = await Book.find({ _id: req.params.id });
    const filePath = response[0].bookUrl;
    res.download(path.resolve("../" + filePath));
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * @param {*} req - the http request received
 * @param {*} res - the http response to be sent
 * Used to send a thumbnail image as a response
 */

const downloadBookThumbnail = async (req, res) => {
  try {
    const response = await Book.find({ _id: req.params.id });
    const filePath = response[0].imageUrl;
    res.download(path.resolve("../" + filePath));
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * @param {*} req - the http request received
 * @param {*} files - the files received from multer
 * Used to generate the book object to avoid code duplication in methods requiring book
 */
const constructBookObject = (files, req) => {
  const book = new Book(req.body);
  if (files != null) {
    for (const filePath in files) {
      if (files[filePath].path.includes(".pdf")) {
        book.bookUrl = files[filePath].path;
      } else {
        book.imageUrl = files[filePath].path;
      }
    }
  }
  return book;
};

module.exports = {
  getAllBooks,
  addBook,
  updateOneBook,
  deleteOneBook,
  getBookById,
  downloadBookPdf,
  downloadBookThumbnail,
  addBulkBookData,
};
