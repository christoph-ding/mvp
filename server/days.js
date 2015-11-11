var mongoose = require('mongoose');

var daySchema = mongoose.Schema({
  tasks : { type: Array}
});

var Day = mongoose.model('Day', daySchema);

module.exports = Day

