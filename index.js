const express = require("express");
const app = express();

const subjectRoutes = require("./routes/Subject-routes");
const courseRoutes = require("./routes/Course-routes");
const studentRoutes = require("./routes/Student-routes");

app.use(express.json());

app.use('/subject', subjectRoutes);
app.use('/course', courseRoutes)
app.use('/student', studentRoutes)

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})