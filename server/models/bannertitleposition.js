var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bannerTitlePosition = new Schema({
    top: Number,
    left: Number,
    block: String
    /* , landingText: {type: mongoose.Schema.Types.ObjectId, ref: 'landingText'}, */
    /* landingText: landingText */
    /* picturePath:String, */
})

module.exports = mongoose.model('bannerTitlePosition', bannerTitlePosition);