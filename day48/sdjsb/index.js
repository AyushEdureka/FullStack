const express = require('express');
const app = express();  //Created the Express application

app.get('/',(req,res)=>{
    res.send('Hello Guys');
});

//Make The server listen
app.listen(3001,()=>{
    console.log('Server is running on http://localhost:3001')
});