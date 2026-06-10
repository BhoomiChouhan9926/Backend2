const express = require('express');

// creating the instance of the server
const app = express();


// here progrramming the server 
app.get('/',(req,res)=>{
    res.send("Hello this is bhoomi chouhan")
})

app.get('/about',(req,res)=>{
    res.send("Hello this is about page")
})
// now starting the server 

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})