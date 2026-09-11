const express = require('express');

 const app = express();


 app.get("/",(req,res)=>{
    res.send('This is home page')
 })

 app.get("/contact-us",(req, res)=>{
    res.send(` <h2>Login Form</h2>

    <form action="/contact-us" method="POST">
        <label for="username">Username:</label>
        <input 
            type="text" 
            id="username" 
            name="username" 
            placeholder="Enter username"
            required
        >

        <br><br>

        <label for="password">Password:</label>
        <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Enter password"
            required
        >

        <br><br>

        <button type="submit">Submit</button>
    </form>
`)
 })


 app.post("/contact-us",(req, res)=>{
    res.send(`<h1>Thanks for submit from </h1>`)
 });


 const PORT = 3000;
 app.listen(PORT,()=>{
    console.log(`servere is running on ${PORT}`);
    
 })

