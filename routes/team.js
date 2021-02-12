const express = require("express");

const team = require("../controllers/team.js");

const router = express.Router();

router.get("/", team.getTeamContent);
router.post("/", team.createTeamContent);
router.delete("/:id", team.deleteTeamPost);
module.exports = router;
