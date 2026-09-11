const express = require('express')

const app = express();

app.use((req,res,next)=>{
  console.log("this is first Middleware");
  next()
})

app.use((req,res,next)=>{
  console.log("this is second Middleware");
  next()
})


app.get('/',(req ,res )=>{
    res.send("Hi this side Omkar")
})
app.get('/about',(req ,res )=>{
    res.send("Hi this side about")
})




app.listen(3000,()=>{
    console.log('servere run on 3000 port');
    
})