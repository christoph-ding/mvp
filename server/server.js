var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var http = require('http')
var db = require(path.resolve(__dirname + '/dbConfig.js'))

var app = express();

// schema
var day = require(path.resolve(__dirname + '/days.js'));

// start my app
// server static elements
app.use(express.static(path.resolve(__dirname + '/../client')))

app.get('/', function(req, res) {
  res.send(path.resolve(__dirname + '/../client/app/index.html'))
});

// request-handling
app.post('/app/', function(req, res) {
  console.log('hey')
  Day.findOne({ date: req.body }) 
    .exec(function(err) {
      if (err) {
        res.send(500, err);
      } else {
        var newDay = new Day({          
          tasks: req.body.tasks
        });
        newDay.save(function(err) {
          if (err) {
            res.send(500, err);
          }
        });
      }
  })
})

exports.signupUser = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({ username: username })
    .exec(function(err, user) {
      if (!user) {
        var newUser = new User({
          username: username,
          password: password
        });
        newUser.save(function(err, newUser) {
          if (err) {
            res.send(500, err);
          }
          util.createSession(req, res, newUser);
        });
      } else {
        console.log('Account already exists');
        res.redirect('/signup');
      }
    });
};

app.listen(8000);
console.log("Listening in on port 8000")
module.exports = app;

