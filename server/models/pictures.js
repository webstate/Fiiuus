var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Picture = new Schema({
    picture:String,
    optPath: String
})

module.exports = mongoose.model('pictures', Picture);
