const Book = require("../model/Book");
const path = require("path");
const uuid = require("uuid");
const { updateOne } = require("../model/Order"); 

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
      const book = constructBookObject(files,req);
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


const getAllBooks = async (req, res) => {
  try {
    const response = await Book.find();
    res
      .status(200)
      .json({ success: true, message: "All Books", data: response });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

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

const updateOneBook = async (req, res) => {
  try {
    const files = req.files;
    const book = constructBookObject(files,req);
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

const downloadBookPdf = async (req, res) => {
  try {
    const response = await Book.find({ _id: req.params.id });
    const filePath = response[0].bookUrl;
    res.download(path.resolve("../" + filePath));
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const downloadBookThumbnail = async (req, res) => {
  try {
    const response = await Book.find({ _id: req.params.id });
    const filePath = response[0].imageUrl;
    res.download(path.resolve("../" + filePath));
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const constructBookObject = (files,req) => {
  const book = new Book(req.body);
  if(files!=null) { 
  for(const filePath in files) {
    if(files[filePath].path.includes(".pdf")) {
      book.bookUrl = files[filePath].path;
    }else{
      book.imageUrl = files[filePath].path;
    }
  }
  }
  return book;
}

module.exports = {
  getAllBooks,
  addBook,
  updateOneBook,
  deleteOneBook,
  getBookById,
  downloadBookPdf,
  downloadBookThumbnail,
  addBulkBookData
};
