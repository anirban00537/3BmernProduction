const express = require("express");

const customerContact = require("../controllers/customerContact.js");
const router = express.Router();
router.get("/", customerContact.getCustomerContactContent);
router.post("/", customerContact.createCustomerContactContent);

module.exports = router;
