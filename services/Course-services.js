const repo = require("../repo/Course-repo");

module.exports = {
    create: async (data) => {
        const existingCourse = await repo.findBySubjectAndYear(data.subject_id, data.year);
        if (existingCourse.length > 0) {
            throw new Error("Course already exists");
        }
        return await repo.create(data);
    }
}