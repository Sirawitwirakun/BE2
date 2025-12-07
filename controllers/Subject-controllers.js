const services = require("../services/Subject-services");

module.exports = {
    getAllSubjects: async (req, res) => {
        const { page = 1 , pageSize = 10 , sortBy = 'id' , sortOrder  = 'asc'} = req.query
        const skip = (parseInt(page) - 1) * parseInt(pageSize);
        const take = parseInt(pageSize);
        try{
            const subjects = await services.getAllSubjects({skip,take,sortBy,sortOrder});
            res.json(subjects);
        }catch(err){
            res.status(500).json({message: err.message});
        }
    },
    getSubjectCourses: async (req,res)=>{
        const { id } = req.params;
        try{
            const courses = await services.getSubjectCourses(id);
            res.json(courses);
        }catch(err){
            res.status(500).json({message: err.message});
        }
    }
}