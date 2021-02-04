import PortfolioModel from "../models/PortfolioModel.js";
import mongoose from "mongoose";
export const getPortfolioContent = async (req, res) => {
  try {
    const Portfolio = await PortfolioModel.find();

    res.status(200).json(Portfolio);
    console.log("fetched Portfolio");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPortfolioContent = async (req, res) => {
  const Portfolio = req.body;
  const newPortfolioContent = new PortfolioModel(Portfolio);
  try {
    await newPortfolioContent.save();
    console.log("success");
    res.status(201).json(newPortfolioContent);
  } catch (error) {
    console.log("error");
    res.status(409).send(error.message);
  }
};

export const updatePortfolioContent = async (req, res) => {
  //   const { PortfolioId } = req.params;
  const post = req.body;

  const postMessages = await PortfolioModel.findOneAndUpdate(
    { portfolioId: 1234 },
    post,
    {
      new: true,
    }
  );
  console.log("done");
  res.json(postMessages);
};

export const deletePortfolioPost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");

  await PortfolioModel.findByIdAndRemove(id);
  console.log("DELETED port");

  res.json({ message: "Post deleted successfully" });
};
