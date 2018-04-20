// Dependencies

const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const cheerio = require("cheerio");
const request = require("request");

var PORT = 3000;

// Requiring the `User` model for accessing the `users` collection
// var User = require("./userModel.js");

// Initialize Express
var app = express();

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/userdb");

// Connect to the Mongo DB
// mongoose.Promise = Promise;
// mongoose.connect(MONGODB_URI);

const databaseUrl = "scraper";
const collections = ["scrapedData"];

// let db = mongoose(databaseUrl, collections);
// db.on("error", function(error) {
//     console.log("Database Error:",error);
// });

app.get("/", function(req, res) {
    res.send("Data Scraped");
});


app.listen(3000, function() {
    console.log("App running on port 3000");
});
