const express = require("express");

const service = require("../controllers/service.js");

const router = express.Router();

router.get("/", service.getServiceContent);
router.post("/", service.createServiceContent);
router.delete("/:id", service.deleteServicePost);

module.exports = router;
