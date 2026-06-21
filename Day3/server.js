const express = require('express');
const app = express();
app.use(express.json())
const notes = [];
// here is the end point to create the note 
app.post('/notes',(req,res)=>{
    res.send("note created")
    notes.push(req.body)
})

app.get('/notes',(req,res)=>{
    res.send(notes)
    
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})