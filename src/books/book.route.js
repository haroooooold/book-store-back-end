const express = require("express");
const router = express.Router();

const {
  postBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
} = require("./book.controller");
const verifyAdminToken = require("../middleware/verifyAdminToken");

//post a book
router.post("/create-book", verifyAdminToken, postBook);

// get all books
router.get("/", getAllBooks);

// get specific book
router.get("/:id", getSingleBook);

// update a book
router.put("/edit/:id", verifyAdminToken, updateBook);

// delete a book
router.delete("/:id", verifyAdminToken, deleteBook);

module.exports = router;
