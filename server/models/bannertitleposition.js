var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bannerTitlePosition = new Schema({
    top: Number,
    left: Number,
    block: String
})

module.exports = mongoose.model('bannerTitlePosition', bannerTitlePosition);