const express = require("express");

const stage = require("../controllers/stage.js");

const router = express.Router();

router.get("/", stage.getStageContent);
router.post("/", stage.createStageContent);
router.patch("/", stage.updateStageContent);

module.exports = router;
