const express = require('express');
const { default: mongoose } = require('mongoose');
const mongoDB = require('mongoose');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//connection 

mongoose.connect('mongodb+srv://onkarmane252_db_user:BwKRIX9hy9XSwXcC@curdoprection.b1rugqy.mongodb.net/?appName=CURDOprection')
.then(()=>console.log("Data base is connected"))
.catch((error)=>console.log(`mongoDB error`,error))

//schema

const userSchema = new mongoDB.Schema({
    name:{
        type:String,
        required:true
    },
    schoolName:{
        type:String,
        required:true
    }

},{timestamps:true})


const User = mongoose.model('user',userSchema)



app.get('/' , async (req ,res)=>{
    
    const users = await User.find();

    res.status(200).json({
        data:users
    })

})

app.post('/user', async (req,res)=>{
const body = req.body  

if (!body) {
    return res.status(400).json({Message : "First fill the name and school name "})  
}

await User.create({
    name:body.name,
    schoolName:body.schoolName
})

return res.status(201).json({Message: "user is created..."})
})


app.delete('/user/:id', async (req ,res)=>{
    const id = req.params.id;

    const DeleteUser = await User.findByIdAndDelete(id)

    if (!DeleteUser) {
        res.status(404).json({Message:"User Not Found..."})
    } else {
       res.status(200).json({Message:"User deleted successfully",Data:DeleteUser}) 
    }
})

app.put('/user/:id' , async(req ,res)=>{
     
    const id = req.params.id

     console.log("ID:", id);
     console.log("BODY:", req.body);

    const updateuser = await User.findByIdAndUpdate(id,{
       name:req.body.name,
       schoolName:req.body.schoolName
    },
    {
        returnDocument:"after",
        runValidators:true
    }
)

if (!updateuser) {
    res.status(404).json({Message:"User Not Found..."})
} else {
    res.status(200).json({Message:"User update successfully"})
}

})





const PORT = 8080;
app.listen(PORT,()=>{
    console.log(`Application is running on ${PORT}`);
    
})