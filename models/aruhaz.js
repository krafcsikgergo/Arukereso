const Schema = require("mongoose").Schema;
const db = require("../config/db");

const Aruhaz = db.model("Aruhaz", {
  name: String,
  address: String,
  phone: String,
  email: String,
  parking: Boolean,
  opening_hours: String,
});
module.exports = Aruhaz;
