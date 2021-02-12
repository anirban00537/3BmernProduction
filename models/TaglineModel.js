const mongoose = require("mongoose");

const TaglineSchema = mongoose.Schema({
  title: String,
  tagId: Number,
  changableText: String,
  description: String,
  image: String,
});

const TaglineModel = mongoose.model("TaglineModel", TaglineSchema);

module.exports = TaglineModel;
