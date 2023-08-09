const express = require("express")
const app = express()
const { PORT = 8000, DATABASE_URL } = process.env

app.get("/", (req, res) => {
    res.json({hello: "world"})
})

///////////////////////////////////////////////////
app.listen(PORT, () => console.log(`listening on ${PORT}`))