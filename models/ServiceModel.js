const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
  title: String,
  description: String,
  image: String,
});

const ServiceModel = mongoose.model("ServiceModel", serviceSchema);

module.exports = ServiceModel;
