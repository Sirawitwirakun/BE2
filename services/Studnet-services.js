const repo = require("../repo/Student-repo");

module.exports = {
    deleteCourseFromStudentId: async (studentId, courseId) => {
        return await repo.deleteCourseFromStudentId(parseInt(studentId), parseInt(courseId));
    }
}