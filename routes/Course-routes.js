const express = require("express");
const router = express.Router();

const controller = require("../controllers/Course-controllers");

router.post("/", controller.create);

module.exports = router;