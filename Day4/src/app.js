const express = require('express');
// in this file we create the server and also config the server

const app = express();
app.use(express.json());

const notes = [];

app.post('/notes',(req,res)=>{
    notes.push(req.body);
    res.send("Note created successfully");
    
})
app.get('/notes',(req,res)=>{
    res.send(notes);
})
// here is the api to delet the note 
app.delete('/notes/:idx',(req,res)=>{
    const idx = req.params.idx
    delete notes[idx];
    res.send("Note deleted successfully");

})
// here is the api to update the description of the notes
app.patch('/notes/:idx',(req,res)=>{
     const idx = req.params.idx;
     notes[idx].desc = req.body.desc;
     res.send("Note updated successfully");
})
// now we need to export this 



module.exports = app;