import TeamModel from "../models/TeamModel.js";
export const getTeamContent = async (req, res) => {
  try {
    const Team = await TeamModel.find();

    res.status(200).json(Team);
    console.log("fetched Team");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTeamContent = async (req, res) => {
  const Team = req.body;
  const newTeamContent = new TeamModel(Team);
  try {
    await newTeamContent.save();
    console.log("success");
    res.status(201).json(newTeamContent);
  } catch (error) {
    console.log("error");
    res.status(409).send(error.message);
  }
};

export const deleteTeamPost = async (req, res) => {
  const { id } = req.params;

  await TeamModel.findByIdAndRemove(id);
  console.log("DELETED");

  res.json({ message: "Post deleted successfully" });
};
