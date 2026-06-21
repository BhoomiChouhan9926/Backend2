// in this file we will strat the server and also connect the server with the datatbase

const app = require('./src/app.js')
const connectToDb = require('./src/config/database.js')
require('dotenv').config();


connectToDb();


app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})