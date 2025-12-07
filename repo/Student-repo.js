const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

module.exports = {
    deleteCourseFromStudentId: async (studnetId , courseId)=>{
        return await prisma.course_student.deleteMany({
            where: {
                student_id: studnetId,
                course_id: courseId
            }
        })
    }
}