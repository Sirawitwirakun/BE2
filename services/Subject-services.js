const repo  = require("../repo/Subject-repo");

module.exports = {
    getAllSubjects: async (params) => {
        return await repo.getAllSubjects(params);
    },
    getSubjectCourses: async (id) =>{
        return await repo.findCoursesById(id);
    }
}