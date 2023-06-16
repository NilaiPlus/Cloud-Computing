require('dotenv').config();
const PORT = process.env.PORT || 5000; /*8080*/
const express = require('express');
const nilaiRoutes = require('./routes/siswa')
const authRoutes = require('./routes/auth')
const kelasRoutes = require('./routes/kelas')
/*const semtRoutes = require('./routes/')*/
const middlewareLogRequest = require('./middleware/logs')
const app = express();


app.use(middlewareLogRequest)
app.use(express.json())
app.use('/nilai', nilaiRoutes)
app.use('/auth', authRoutes)
app.use('/kelas', kelasRoutes)


app.get("/",(req,res,next)=>{
    res.json({
        name: "Maliky Syailendra",
        message:"Bangkit"
    });
})

app.listen(PORT, () => {
    console.log(`Server running! at ${PORT}`);
})