const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

module.exports = {
    getAllSubjects: async ({ skip = 0, take = 10, sortBy = 'id', sortOrder = 'asc' } = {}) => {
        return await prisma.subjects.findMany({
            skip: skip,
            take: take,
            orderBy: {
                [sortBy]: sortOrder
            }
        });
    },
    findCoursesById: async (id) => {
        return await prisma.courses.findMany({
            where: {
                subject_id: parseInt(id)
            }
        })
    }
}