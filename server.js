const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = require("./models/articles.js")

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
const routes = require("./routes/router")
// app.use(routes);

app.post("/api/articles", function (req, res) {
  db.create({title:req.body[0].headline.main, link: req.body[0].web_url})
    .then((data) => { res.json(data) })
})

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
