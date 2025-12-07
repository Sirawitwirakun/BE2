const express = require('express')
const router = express.Router();

const controllers = require('../controllers/Studnet-controllers')

router.delete('/:studentId/course/:courseId', controllers.deleteCourseFromStudentId )

module.exports = router