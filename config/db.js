const mongoose = require("mongoose");
const url = 'mongodb://127.0.0.1:27017/PAI2R6';
mongoose.connect(url, {
  useNewUrlParser: true,
});

module.exports = mongoose;
