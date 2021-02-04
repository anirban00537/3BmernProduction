import DetailsModel from "../models/DetailsModel.js";

export const getDetailsContent = async (req, res) => {
  try {
    const Details = await DetailsModel.find({ detailsId: 1234 });

    res.status(200).json(Details);
    console.log("fetched Details");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createDetailsContent = async (req, res) => {
  const Details = req.body;
  const newDetailsContent = new DetailsModel(Details);
  try {
    await newDetailsContent.save();
    console.log("success");
    res.status(201).json(newDetailsContent);
  } catch (error) {
    console.log("error");
    res.status(409).send(error.message);
  }
};

export const updateDetailsContent = async (req, res) => {
  //   const { DetailsId } = req.params;
  const post = req.body;

  const postMessages = await DetailsModel.findOneAndUpdate(
    { detailsId: 1234 },
    post,
    {
      new: true,
    }
  );
  console.log("done");
  res.json(postMessages);
};
