import AboutsModel from "../models/AboutModel.js";

export const getAboutsContent = async (req, res) => {
  try {
    const Abouts = await AboutsModel.find({ aboutId: 1234 });

    res.status(200).json(Abouts);
    console.log("fetched Abouts");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createAboutsContent = async (req, res) => {
  const Abouts = req.body;
  const newAboutsContent = new AboutsModel(Abouts);
  try {
    await newAboutsContent.save();
    console.log("success about");
    res.status(201).json(newAboutsContent);
  } catch (error) {
    console.log("error");
    res.status(409).send(error.message);
  }
};

export const updateAboutsContent = async (req, res) => {
  //   const { AboutsId } = req.params;
  const post = req.body;

  const postMessages = await AboutsModel.findOneAndUpdate(
    { aboutId: 1234 },
    post,
    {
      new: true,
    }
  );
  console.log("done");
  res.json(postMessages);
};
