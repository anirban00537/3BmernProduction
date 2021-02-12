const express = require("express");

const into = require("../controllers/intro.js");

const router = express.Router();

router.get("/", into.getIntroContent);
router.post("/", into.createIntroContent);
router.patch("/", into.updateIntroContent);

module.exports = router;
