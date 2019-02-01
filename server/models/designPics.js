var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var designPicture = new Schema({
    picturePath:String,
    optPath:String,
    block: String,
    added: String
})

module.exports = mongoose.model('designpicture', designPicture);
