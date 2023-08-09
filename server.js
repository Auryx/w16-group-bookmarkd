const express = require("express")
const app = express()
const { PORT = 8000, DATABASE_URL } = process.env




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