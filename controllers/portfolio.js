const PortfolioModel = require("../models/PortfolioModel.js");
const mongoose = require("mongoose");
exports.getPortfolioContent = getPortfolioContent = async (req, res) => {
  try {
    const Portfolio = await PortfolioModel.find();

    res.status(200).json(Portfolio);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createPortfolioContent = createPortfolioContent = async (req, res) => {
  const Portfolio = req.body;
  const newPortfolioContent = new PortfolioModel(Portfolio);
  try {
    await newPortfolioContent.save();
    res.status(201).json(newPortfolioContent);
  } catch (error) {
    res.status(409).send(error.message);
  }
};
exports.updatePortfolioContent = updatePortfolioContent = async (req, res) => {
  //   const { PortfolioId } = req.params;
  const post = req.body;

  const postMessages = await PortfolioModel.findOneAndUpdate(
    { portfolioId: 1234 },
    post,
    {
      new: true,
    }
  );
  res.json(postMessages);
};

exports.deletePortfolioPost = deletePortfolioPost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");

  await PortfolioModel.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully" });
};
