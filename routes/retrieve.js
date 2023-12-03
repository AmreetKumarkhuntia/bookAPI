const express = require("express");
const Book = require("../model/books");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const body = req.body;
        if (body.hasOwnProperty("year")) {
            console.log("yes")

            if (!Number.isInteger(body.year)) throw {
                status: "failure",
                error: "year not an integer"
            }
            if (Number(body.year) < 0) throw {
                status: "failure",
                error: "Year less than 0"
            }

        }

        let result;
        if (body.hasOwnProperty("id")) {
            result = await Book.find({ _id: body.id });
        }
        else {
            result = await Book.find(body);
        }

        res.status(200).json({
            status: "success",
            books: result
        });
    }
    catch (e) {
        res.status(401).json(e);
    }
})

module.exports = router;