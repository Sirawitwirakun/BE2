const express = require("express");
const router = express.Router();


const controller = require("../controllers/Subject-controllers");

router.get("/", controller.getAllSubjects);
router.get("/:id", controller.getSubjectCourses);

module.exports = router;