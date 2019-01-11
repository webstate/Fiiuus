// worker model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Worker = new Schema({
  name: String,
  occupationEst: String,
  email: String,
  infoEst: String,
  picture: String,
  infoEng: {type: String, default: ""},
  occupationEng: {type: String, default: ""},
  infoFin: {type: String, default: ""},
  occupationFin: {type: String, default: ""},
  infoRus: {type: String, default: ""},
  occupationRus: {type: String, default: ""}
});



module.exports = mongoose.model('worker', Worker);
