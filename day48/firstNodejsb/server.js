const express = require("express");  //calling express module
const app = express(); //It create express applixation

//Define a route(URL PATH)  and response
app.get("/",(req,res)=>{
    res.send("Hello world")
});


//MAKE THE SERVER LISTEN ON PORT
app.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000')
});
