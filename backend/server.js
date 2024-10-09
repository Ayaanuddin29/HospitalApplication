import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';
import doctorRoute from './routes/doctorRoute.js';
import userRouter from './routes/userRoute.js';
//app config 
const app=express();
const port =process.env.PORT||4000
connectDB()
connectCloudinary()

//middlewares
app.use(express.json())
app.use(cors())

//end points
app.use('/api/admin',adminRouter)
app.use('/api/doctor/',doctorRoute)
app.use('/api/user/',userRouter)

app.get('/',(req,res)=>{
    res.send("API Workings")
})
app.listen(port,(req,res)=>{
    console.log("Server Started",port)
})