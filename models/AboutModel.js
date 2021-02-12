const mongoose = require("mongoose");

const AboutSchema = mongoose.Schema({
  aboutId: Number,
  title: String,
  description: String,
  image: String,
});

const AboutModel = mongoose.model("AboutModel", AboutSchema);

module.exports = AboutModel;
