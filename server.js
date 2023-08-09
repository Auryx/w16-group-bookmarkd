// DEPENDENCIES
require("dotenv").config();
const { PORT = 8000, DATABASE_URL } = process.env
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const morgan = require("morgan")

// Connection Tracker for Mongoose

mongoose.connect(DATABASE_URL)

mongoose.connection
.on("open", () => console.log("Mongo connected"))
.on("close", () => console.log("Mongo disconnected"))
.on("error", () => console.log(error))

// Middleware

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

/////////////////////////////////////////

// ROUTES

// index
app.get('/bookmarks', async(req, res) => {
    try {
        const bookmarks = await Bookmarks.find({});
        res.json(bookmarks);
    } catch (error) {
        res.status(400).json({error});
    }
});

app.get("/", (req, res) => {
    res.json({hello: "world"})
})


///////////////////////////////////////////////////
app.listen(PORT, () => console.log(`listening on ${PORT}`))