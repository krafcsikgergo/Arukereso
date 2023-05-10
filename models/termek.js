const Schema = require("mongoose").Schema;
const db = require("../config/db");

const Termek = db.model("Termek", {
  aruhaz: {
    type: Schema.Types.ObjectId,
    ref: "Aruhaz",
  },
  name: String,
  price: Number,
});

module.exports = Termek;