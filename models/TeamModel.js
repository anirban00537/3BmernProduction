const mongoose = require("mongoose");

const TeamSchema = mongoose.Schema({
  name: String,
  position: String,
  image: String,
});

const TeamModel = mongoose.model("TeamModel", TeamSchema);

module.exports = TeamModel;
