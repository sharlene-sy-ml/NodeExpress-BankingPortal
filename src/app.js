const express = require("express")
const fs = require("fs")
const path = require("path")

const app = express();

app.set("views", path.join(__dirname, "views"))
app.set("public", path.join(__dirname, "public"))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index", { 'title': 'Index' })
})

app.listen(3000, () => console.log("PS Project Running on port 3000!"))