const express = require("express");

const about = require("../controllers/about.js");

const router = express.Router();

router.get("/", about.getAboutsContent);
router.post("/", about.createAboutsContent);
router.patch("/", about.updateAboutsContent);

module.exports = router;
