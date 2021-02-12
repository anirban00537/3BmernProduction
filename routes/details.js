const express = require("express");

const details = require("../controllers/details.js");

const router = express.Router();

router.get("/", details.getDetailsContent);
router.post("/", details.createDetailsContent);
router.patch("/", details.updateDetailsContent);

module.exports = router;
