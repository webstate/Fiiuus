var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bannerPicture = new Schema({
    picturePath:String,
    block: String,
})

module.exports = mongoose.model('bannerpicture', bannerPicture);
