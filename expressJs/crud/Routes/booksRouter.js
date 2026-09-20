const express = require("express");
const { getBooks, createBook,getBook, updateBook, deleteBook, replaceBook } = require("../Controllers/bookController.js");
const validate = require("../middlewares/validate.js");
const bookSchema = require("../validators/bookValidator.js")
const bookRouter = express.Router();

// bookRouter.post("/create",createBook);
bookRouter.post("/create", validate(bookSchema),createBook);
bookRouter.get("/",getBooks);
bookRouter.get("/:id",getBook);
bookRouter.put("/:id", replaceBook);
bookRouter.patch("/:id",updateBook);
bookRouter.delete("/:id",deleteBook);


module.exports = bookRouter;