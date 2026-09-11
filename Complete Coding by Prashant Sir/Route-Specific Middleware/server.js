const express = require('express')

const app = express();

const userauth =(req,res,next)=>{
    console.log("user is loging");
    next()
}

app.get('/',(req,res)=>{
 res.send('<h1>home page</h1>')
})

app.get('/user',userauth,(req,res)=>{
  res.send('<h1>User page </h1>')
})


app.listen(3000,()=>{
    console.log("server is running on 3000 port ");
    
})