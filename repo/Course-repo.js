const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

module.exports = {
    create: async (data)=>{
        return await prisma.courses.create({
            data
        })
    },
    findBySubjectAndYear: async (subjectId,year)=>{
        return await prisma.courses.findMany({
            where:{
                subject_id: subjectId,
                year: year
            }
        })
    }
}