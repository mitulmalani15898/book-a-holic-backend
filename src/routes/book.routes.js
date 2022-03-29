/** @author Prit Thakkar (B00890731) */

const express = require("express");
const router = express.Router();
const upload = require("../utils/multer");
const bookController = require("../controller/book.controller");

/**
 * mapper to map uri's to appropriate method
 */
router.get("/api/books", bookController.getAllBooks);
router.get("/api/books/bulk",bookController.addBulkBookData)
router.get("/api/books/:id", bookController.getBookById);
router.post("/api/books",upload.array("files",2),bookController.addBook);
router.put("/api/books", bookController.updateOneBook);
router.delete("/api/books/:id", bookController.deleteOneBook);
router.get("/api/thumbnail/:id/download", bookController.downloadBookThumbnail);
router.get("/api/books/:id/download", bookController.downloadBookPdf);

module.exports = router;
