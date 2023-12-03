const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const add = require("./routes/add");
const retrieve = require("./routes/retrieve");
const update = require("./routes/update");


dotenv.config();
const app = express();

const port = process.env.PORT;
const DatabaseURL = process.env.DATABASEURL;
const CorsOptions = {
    origin: "*",
    Credentials: true,
}

app.use(cors(CorsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/books",add);
app.use("/api/books",retrieve);
app.use("/api/books",update);

async function ConnectDB() {
    try {
        await mongoose.connect(DatabaseURL);
        console.log("Connected To Database");
    }
    catch (e) {
        console.log(e);
    }
}

app.listen(port, async () => {
    try {
        await ConnectDB();
        console.log("Listening on port " + port);
    }
    catch (e) {
        console.log(e);
    }
})