var express = require('express');
// var mongoose = require('mongoose');
var path = require('path');
var http = require('http')
var app = express();

// start my app

// server static elements // use __dirname
app.use(express.static(path.resolve(__dirname + '/../client')))

app.get('/', function(req, res) {
  res.send(path.resolve(__dirname + '/../client/app/index.html'))
});



app.listen(8000);
console.log("Listening in on port 8000")
module.exports = app;

