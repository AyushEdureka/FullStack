const express = require('express');  
const app = express();
const PORT = 3000;

app.use(express.json());  //Express will use the data in Json format - json()- data can be easily human reable

//1. GET- To get the information from server
app.get('/restaurant',(req,res)=>{  //www.xyz.com/restrant-- request
    res.send('List of All restraunt')
});

app.get('/restaurant/:id',(req,res)=>{
    res.send(`Menu of restarunt with ID: ${req.params.id} `)
});

//POST -- TO SEND THE DATA To SERVER
app.post('/order',(req,res)=>{
    res.send(`Oder placed Succuesfully! Order details  : ${JSON.stringify(req.body)}`)
});

//Put - update the existing data
app.put('/order/:id',(req,res)=>{
    res.send(`Order with ID : ${req.params.id}   Updated succesfully`)
});

//Delete - To delete the data , cancel the order
app.delete('/order/:id',(req,res)=>{
    res.send(`Order Cancelled with Order ID : ${req.params.id}`);
})

app.listen(PORT,()=>{
    console.log(`Server is ruuning on http://localhost:${PORT}`);
});
