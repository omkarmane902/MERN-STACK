const express = require('express');
const data = require("./data.json")
const fs = require('fs');

const app = express();
app.use(express.urlencoded({extended:false}))


const PORT = 3000;


app.get('/',(req , res)=>{
   res.json(data)
})

app.get('/user/:id',(req,res)=>{
    const id = Number(req.params.id);
    const student = data.find((value)=>{
       return value.id === id;
    })
    if(!student){
        return res.status(404).json({
            Message:"Student not found"
        });
    }
    res.json(student)
})


app.post('/user',(req ,res)=>{
   const body = req.body
   
   if (!body.name || !body.schoolName) {
    return res.status(400).json({ message: "Name and email are required"})
   }

   const NewUser = {
    id:data.length+1,
    name:body.name,
    schoolName:body.schoolName
   }
   
    // 1. Add to memory
   data.push(NewUser);

   // 2. Save to file
   fs.writeFileSync('./data.json',JSON.stringify(data,null,2))

   res.status(201).json({
        message: "User created",
        data: NewUser
    });
//    if(body){
//      data.push({body})
//      return res.json({state:"users is created...."})
//    }
//    else{
//      return res.json({state:"pending...."})
//    }
})

app.delete('/user/:id',(req, res)=>{
   
    const id = Number(req.params.id)

    const FindId = data.findIndex((value)=>{
        return value.id === id 
    })

    if (!FindId) {
       return res.json({Message:'User not found'})
    }
   
     const deleteUser = data.splice(FindId , 1);

     fs.writeFileSync("./data.json",JSON.stringify(data,null,2))
    
       res.status(200).json({
        message: "User deleted successfully",
        data: deleteUser
    });


})

    
app.listen(PORT,()=>{
    console.log(`server is running in ${PORT}`);
})


