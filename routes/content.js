const express = require("express");

const content = require("../controllers/content.js");

const router = express.Router();

router.get("/", content.getTagContent);
router.post("/", content.createTagContent);
router.patch("/", content.updateTagContent);

module.exports = router;
