
// by this we are requiring the express 
const express = require('express');

// now we will create the express server
const app = express();

app.get('/',(req,res)=>{
    res.send ("server is running on port 3000")
})

// now we need to statrt the server
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})
