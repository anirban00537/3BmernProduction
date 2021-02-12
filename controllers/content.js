const mongoose = require("mongoose");
const TaglineModel = require("../models/TaglineModel.js");

exports.getTagContent = getTagContent = async (req, res) => {
  try {
    const tagLine = await TaglineModel.find({ tagId: 1234 });

    res.status(200).json(tagLine);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createTagContent = createTagContent = async (req, res) => {
  const TagLine = req.body;
  const newTagContent = new TaglineModel(TagLine);
  try {
    await newTagContent.save();
    res.status(201).json(newTagContent);
  } catch (error) {
    res.status(409).send(error.message);
  }
};

exports.updateTagContent = updateTagContent = async (req, res) => {
  //   const { tagId } = req.params;
  const post = req.body;
  const postMessages = await TaglineModel.findOneAndUpdate(
    { tagId: 1234 },
    post,
    {
      new: true,
    }
  );
  res.json(postMessages);
};
