const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    name: String,
    author: String,
    year: Number,
    description: String
});

const Book = new mongoose.model("Book", bookSchema);

module.exports = Book;