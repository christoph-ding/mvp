// connect to mongo
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/schedule');

// connect to database
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
 console.log('Mongodb connection open');
});

module.exports = db;
