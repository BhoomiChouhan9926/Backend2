// in this we will start the server and also connect the server with the database
// to connect the sever with the databse we require a package called mongoose
const app = require('./src/app.js')
const mongoose = require('mongoose')

function connectToDb(){
    mongoose.connect('mongodb+srv://bhoomichouhan040_db_user:gpoQDAADarNcqgUo@cluster0.uurkmlg.mongodb.net/day-6')
    .then(()=>{
        console.log("successfully connected to the database")
    })
}

connectToDb();
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})