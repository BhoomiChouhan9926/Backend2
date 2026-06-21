// in this file we will create the schema and aslo the model 
const mongoose  = require('mongoose');


// this is schema
const notesSchema = new mongoose.Schema({
    "title":String,
    "desc" :String
})
//this is model without model we will not be able to perform any of the curd operation
 const noteModel = mongoose.model("notes",notesSchema)

module.exports = noteModel;
