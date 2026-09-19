const express = require('express');
const data = require('./data.json');

const app = express();
const PORT = 8080;

app.get('/', (req , res)=>{
    res.setHeader("x-myname", "Omkar mane")
    console.log(req.header)
    return res.json(data)
   
});



app.listen(PORT, ()=>{
    console.log(`port is running on ${PORT}`);
    
})



