var express = require('express');
// var mongoose = require('mongoose');

var app = express();

// mongoose.connect('mongodb://localhost/shortly');

// do I need any Middleware?

app.listen(8000)
console.log("Listening in on port 8000")

module.exports = app;
