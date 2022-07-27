var mongoose = require("mongoose");

var reservationSchema = new mongoose.Schema({
  //time here
  name: String,
  phone: String,
  email: String,
  title: String
});
var Reservation = mongoose.model("Reservation", reservationSchema);

module.exports.model = Reservation;
module.exports.schema = reservationSchema;
