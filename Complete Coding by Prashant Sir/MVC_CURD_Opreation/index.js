const express = require('express');
const connectDB = require('./src/db/db.js');
const userRouter = require('./src/routes/userRoutes.js')
require('dotenv').config();


const app = express();
connectDB()


app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/user', userRouter)


app.listen(process.env.PORT ,()=>console.log(`server is running on ${process.env.PORT}✅`))




