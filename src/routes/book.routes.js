const bookController = require('../controller/book.controller');
const express = require('express');
const router = express.Router();

router.get("/api/books",bookController.getAllBooks);
router.get("/api/books/:id",bookController.getBookById);
router.post("/api/books",bookController.addBook);
router.put("/api/books",bookController.updateOneBook);
router.delete("/api/books",bookController.deleteOneBook);
router.get('/api/thumbnail/:id/download',bookController.downloadBookThumbnail);
router.get('/api/books/:id/download',bookController.downloadBookPdf);

module.exports = router;