const Schema = require("mongoose").Schema;
const db = require("../config/db");

const Termek = db.model("Termek", {
  aruhazId: {
    type: Schema.Types.ObjectId,
    ref: "Aruhaz",
  },
  id: Number,
  name: String,
  price: Number,
});

module.exports = Termek;