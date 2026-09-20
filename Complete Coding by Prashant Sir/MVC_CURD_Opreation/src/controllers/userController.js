const mongoose = require("mongoose");
const User = require('../models/userModel.js')

const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      data: users
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to get users",
      error: error.message
    });
  }
};

const createUser = async (req ,res)=>{ 

    const { name, schoolName } = req.body;

    if (!name || !schoolName)  {
      res.status(500).json({Messaage:"enter your Name and schoolName"})
    }
    else{
      await User.create({
        name:name,
        schoolName:schoolName
      })
      res.status(201).json({Message :"user is created...."})
    }

}

const updatedUser = async (req , res)=>{

  const id = req.params.id

  const updatedata = await User.findByIdAndUpdate(id,
    {   name:req.body.name,
        schoolName:req.body.schoolName
    },
    {
      returnDocument:"after",
      runValidators:true
    }
  )
 
  if (!updatedata) {
    res.status(404).json({Message:"USER IS NOT FOUND"})
  }
  else{
    res.status(200).json({Message:"User is updated"})
  }
}

const deleteUser = async(req ,res)=>{
   const  id = req.params.id

   const userdelet = await User.findByIdAndDelete(id);

   if (!userdelet) {
    res.status(404).json({Message:"USER IS NOT FOUND"})
  }
  else{
    res.status(200).json({Message:"User is Deleted"})
  }
 
}

module.exports = {getUsers ,createUser ,updatedUser , deleteUser};