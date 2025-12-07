const { deleteCourseFromStudentId } = require("../repo/Student-repo");
const services = require("../services/Studnet-services");

module.exports = {
    deleteCourseFromStudentId: async (req, res) => {
        const { studentId, courseId } = req.params;
        try {
            await services.deleteCourseFromStudentId(studentId, courseId);
            res.json('deleted')
        } catch (err) {
            if (err.code === 404) {
                return res.status(404).json({ message: 'Not Found' })
            } else {
                res.status(500).json({ message: 'Internal Server Error' })
            }
        }
    }
}