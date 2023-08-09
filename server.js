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
// Model

const bookmarkSchema = new mongoose.Schema({
  name: String,
  url: String,
});

const Bookmarks = mongoose.model("Bookmark", bookmarkSchema);

// ROUTES

// INDEX - GET
app.get('/bookmarks', async (req, res) => {
  try {
    const bookmarks = await Bookmarks.find({});
    res.json(bookmarks);
  } catch (error) {
    res.status(400).json({ error });
  }
});

// CREATE - POST
app.post('/bookmarks', async (req, res) => {
  try {
    const bookmark = await Bookmarks.create(req.body);
    res.json(bookmark);
  } catch (error) {
    res.status(400).json({ error });
  }
});

// SHOW - GET 
app.get('/bookmarks/:id', async (req, res) => {
    try {
        const book = await Bookmar.findById(req.params.id);
        res.json(person);
    } catch (error) {
        res.status(400).json({error});
    }
});

// UPDATE - PUT
app.put('/bookmarks/:id', async (req, res) => {
    try {
        const bookmark = await Bookmarks.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(bookmark);
    } catch (error) {
        res.status(400).json({error});
    }
});

// DESTROY - DELETE
app.delete('/bookmarks/:id', async (req, res) => {
    try {
        const bookmark = await Bookmarks.findByIdAndDelete(req.params.id);
        res.status(204).json(bookmark)
    } catch (error) {
        res.status(400).json({error});
    }
});

app.get("/", (req, res) => {
    res.json({hello: "world"})
});



///////////////////////////////////////////////////
app.listen(PORT, () => console.log(`listening on ${PORT}`))
