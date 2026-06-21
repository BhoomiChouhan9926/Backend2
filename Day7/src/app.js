// in this we will crdate the server and aslo conig the server
const express = require('express');
const app = express();
app.use(express.json());
const noteModel = require('./models/notes.models');
// here we will create the api
// it is the api to create the note
app.post('/notes',async(req,res)=>{
    const {title, desc} = req.body;
  const note = await  noteModel.create({
        title, desc
    })
    res.status(201).json({
        'message':"Note created successfully",
        note
    })
})
// here is the api to fetch the data
app.get('/notes', async(req,res)=>{
    // this find method fetch all the data nd return the array of object 
    const notes =await noteModel.find();
    res.status(200).json({
        'message' : notes
    })
})



module.exports = app;