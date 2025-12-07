npm install prisma@6.19 @prisma/client@6.19 dotenv
npx prisma init

config database_url "mysql//root:password@localhost:3306/databaseName"

insert ข้อมูลใน database

เสร็จแล้วไป setup ใน schema.prisma
แก้ generator client
provider = "prisma-client-js"
แก้ datasource db 
provider = "mysql"

npx prisma generate
npx db pull ถ้าข้อมูลมาใน schema.prisma คือมันติดต่อ MySQL ได้

เริ่มสร้างจาก folder
index.js
repositories
services
routes
controllers

npm install express

ลอง test Backend
### --index.js--
const express = require("express");
const app = express();

app.use('/',(req,res) => {
	res.send("Hello test"); //เอามาเทสเฉยๆเดะค่อยลบออก
})
app.listen(3000,() => {
	console.log("server running on port 3000")
})

ลอง test ใน postman
GET http://localhost:3000/
ถ้าขึ้น Hello test ก็คือใช้งานได้

### --index.js--
เริ่มเขียน endpoint แรกคือ subject
const subjectRoutes = require("./routes/subject-routes");
app.use('/subject', subjectRoutes;)

### --routes/subject-routes.js--
const express = require("express");
const router = express.Router();

router.get("/",(req,res) => {
	res.send("subject routes")
})

module.exports = router;

รันใหม่ node index.js แล้ว test ใน postman GET http://localhost:3000/subject expect output = subject route

### --repositories/subject-repo--- //layer repo = ติดต่อกับ database
const { PrismaClient } = require(""../generated/prisma");
const prisma = new PrismaClient();

module.exports = {
	getAllSubject: aync () => {
		return await prisma.subjects.findmany
	}
}

เดี๋ยวเขียนต่อ ลอง commit ก่อน




----------------------------
### 1. index.js (หรือ app.js)
จุดเริ่มต้นของแอป
สร้าง Express app
เชื่อมต่อ database (ถ้ามี)
โหลด middleware ต่าง ๆ
ผูก route หลักเข้ากับแอป

### 2. routes
จัดการ เส้นทาง (URL endpoint)
รับ request จาก client
ส่งต่อให้ controller ที่เหมาะสม
ไม่มี business logic
ตัวอย่าง:
router.get("/subjects", subjectController.getAllSubjects);

### 3. controllers
รับ request จาก routes
เรียก service เพื่อทำงาน
จัดการ response (ส่ง JSON, status code)
ไม่มี logic ด้านข้อมูลโดยตรง
ตัวอย่าง:
const subjects = await subjectService.getAll();
res.json(subjects);

### 4. services
Business logic ทั้งหมดอยู่ที่นี่
ประมวลผลก่อน–หลังเรียกฐานข้อมูล (validation, calculation)
เรียก repositories เพื่อเข้าถึงข้อมูล
ตัวอย่าง:
return subjectRepository.findAll();

### 5. repositories
ชั้นที่คุยกับ database โดยตรง
ทำงาน query CRUD ทั้งหมด (SQL/ORM/Mongoose)
ตัวอย่าง:
return SubjectModel.find();

### ความสัมพันธ์ทั้งระบบ
Client → Routes → Controllers → Services → Repositories → Database


