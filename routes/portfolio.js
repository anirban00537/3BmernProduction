const express = require("express");

const into = require("../controllers/portfolio.js");

const router = express.Router();

router.get("/", into.getPortfolioContent);
router.post("/", into.createPortfolioContent);
router.delete("/:id", into.deletePortfolioPost);

module.exports = router;
