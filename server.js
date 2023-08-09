const express = require("express")
const app = express()
const { PORT = 8000, DATABASE_URL } = process.env

//Model
const BookmarkSchema = new mongoose.Schema({
  name: String,
  url: String,
});

const Bookmark = mongoose.model("Bookmark", BookmarkSchema);

app.get("/", (req, res) => {
  res.json({ hello: "world" })
})

///////////////////////////////////////////////////
app.listen(PORT, () => console.log(`listening on ${PORT}`))