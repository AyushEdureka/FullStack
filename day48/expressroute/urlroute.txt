const express = require('express');
const app = express();
const PORT = 3001
;

app.use(express.json());  //Middleware

//1. GET - to recieve the information or data
// www.zomato.com - hompage
// www.zomato.com/restraunt -- list of the restraunt
app.get('/',(req,res)=>{
    res.send('Hello welocme to zomato')
})


app.get('/restaurants',(req,res)=>{
    res.send('List of all restaurants ');
});  //localhost:3000/restaurant

app.get('/restaurants:id',(req,res)=>{
    res.send(`Menu of a rstarant with Id : ${req.params.id}`)
})

//Post - to send the data

app.post('/orders/:id',(req,res)=>{
    res.send(`order with ID: ${req.params.id} update sucessfully`)
})

//Start the server
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})

