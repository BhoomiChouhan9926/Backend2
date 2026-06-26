const express = require('express');
const app = express();
const noteModel = require("./models/notes.model.js")
const cors = require('cors')
const path = require('path');
// here is the api to creta ethe note
app.use(express.json())
app.use(express.static('./public'))
app.use(cors());

app.post('/api/notes',async(req,res)=>{
     const {title,desc}  = req.body
  const note =  await noteModel.create({
        title,desc
    })

    res.status(201).json({
        'message' : "Note created successfully"
    })
})

// here is the api to fetch the notes
app.get('/api/notes', async(req,res)=>{
  const notes = await  noteModel.find();
  res.status(200).json({
    'notes' : notes
  })
})

// here isthe api to delete the note 
app.delete('/api/notes/:id',async(req,res)=>{
    const id = req.params.id;
    const deletedNote = await noteModel.findByIdAndDelete(id);
    res.status(200).json({
        'message' : "Note deleted successfully",
        'deleted note' : deletedNote
    })
})

// here is the api to update the note
app.patch('/api/notes/:id', async(req,res)=>{
    const id = req.params.id;

    console.log(typeof(id));
    const {desc} = req.body;
    const updatedNote =await noteModel.findByIdAndUpdate(id,{desc});

    res.status(200).json({
        "message":"Note updated sucessfully"
    })

})
app.use('*name',(req,res)=>{
    console.log(__dirname)
    res.sendFile(path.join(__dirname,'../public/index.html'))
})
module.exports = app;