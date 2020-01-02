require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
var bodyParser = require('body-parser');
const app = express();
const cors = require("cors");


const PORT = process.env.PORT || 3001;
//app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(cors())
// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/marketplace";
mongoose.Promise = Promise;
mongoose.connect( MONGODB_URI, { useNewUrlParser: true , useUnifiedTopology: true },(err) => {
	console.log(err || `Connected to MongoDB.`)});

//For uploading image 



// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});