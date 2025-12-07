const services = require("../services/Course-services");

module.exports = {
    create: async (req,res)=>{
       try{
            console.log(req.body);
            const course = await services.create(req.body);
            res.json(course);
       }catch(err){
            if(err.message === 'Course already exists'){
                return res.status(400).json({message: 'Course already exists'});
            }
            res.status(500).json({message: 'Internal Server Error'});
       } 
    }
}