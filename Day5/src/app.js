// in this file we will create the server and also config the server
const express = require('express');
const app = express();
app.use(express.json());
const notes = [];

 // here is the api to create a note
 app.post("/notes",(req,res)=>{
    notes.push(req.body);
    res.status(201).json({
        'message' :"Note created successfully"
    })

 })
 // here is the api to fetch the notes
 app.get('/notes',(req,res)=>{
    res.status(200).json({
        'notes': notes
    })
 })
 // here is the api to delete the note
 app.delete('/notes/:idx',(req,res)=>{
    const idx = req.params.idx ;
   delete notes[idx];
   res.status(204).json({
    'message':"Note deleted successfully"
   })
 })
 // here is the api to update the note
 app.patch('/notes/:idx',(req,res)=>{
    const idx = req.params.idx ;
    notes[idx].desc = req.body.desc;
    res.status(200).json({
        "message":"Note updated successfully"
    })
 })
module.exports = app;