const mongoose = require("mongoose");

const CustomerContactSchema = mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const CustomerContactModel = mongoose.model(
  "CustomerContactSchema",
  CustomerContactSchema
);

module.exports = CustomerContactModel;
