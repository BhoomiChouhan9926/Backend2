const mongoose = require('mongoose');

function connectToDb(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
       console.log("Successfully connected to db")
    })
}

module.exports = connectToDb;