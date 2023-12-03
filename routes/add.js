const express = require("express");
const Book = require("../model/books");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const body = req.body;
        if (!body.name || !body.author || !body.year) throw {
            status: "failure",
            error: "validate fields"
        }
        if (!Number.isInteger(body.year)) throw {
            status: "failure",
            error: "year not an integer"
        }
        if (Number(body.year) < 0) throw {
            status: "failure",
            error: "Year less than 0"
        }

        const result = await Book.find({ name: body.name, author: body.author, year: Number(body.year) });
        if (result.length > 0) throw {
            status: "failure",
            error: "Book already exists"
        }

        const book = new Book({
            name: body.name,
            author: body.author,
            year: Number(body.year),
            description: body.description,
        })
        book.save();

        res.status(200).json({
            status: 'success'
        });
    }
    catch (e) {
        res.status(401).json(e);
    }
})

module.exports = router;