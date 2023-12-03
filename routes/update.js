const express = require("express");
const Book = require("../model/books");
const router = express.Router();

router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;

        if (!id) throw ({
            status: "failure",
            error: "id doesn't exists"
        })

        let updates;
        let result;

        if (body.hasOwnProperty("name")) {
            if (body.name === "") throw {
                status: "error",
                error: "Some fields are empty"
            }

            result = await Book.find({ name: body.name });
            if (result.length > 0) throw {
                status: "error",
                error: "changes already exists"
            }


            updates = {
                ...updates,
                name: body.name
            }
        }
        if (body.hasOwnProperty("author")) {
            if (body.author === "") throw {
                status: "error",
                error: "Some fields are empty"
            }

            updates = {
                ...updates,
                author: body.author
            }
        }
        if (body.hasOwnProperty("description")) {
            if (body.description === "") throw {
                status: "error",
                error: "Some fields are empty"
            }
            updates = {
                ...updates,
                description: body.description
            }
        }
        if (body.hasOwnProperty("year")) {
            if (!Number.isInteger(body.year)) throw {
                status: "failure",
                error: "year not an integer"
            }
            if (Number(body.year) < 0) throw {
                status: "failure",
                error: "Year less than 0"
            }

            updates = {
                ...updates,
                year: body.year
            }
        }d

        await Book.findByIdAndUpdate(id, updates).catch((e) => {
            throw {
                status: "error",
                error: "id doesn't exists"
            }
        });
        result = await Book.findById(id);

        res.status(200).json({
            status: "success",
            book: result
        });
    }
    catch (e) {
        res.status(401).json(e);
    }
})

module.exports = router;