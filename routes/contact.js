const express = require("express");

const contact = require("../controllers/contact.js");

const router = express.Router();

router.get("/", contact.getContactContent);
router.post("/", contact.createContactContent);
router.patch("/", contact.updateContactContent);

module.exports = router;
