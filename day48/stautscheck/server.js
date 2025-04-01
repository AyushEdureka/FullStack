const http = require('http')
const url = require('url')
const cors = require('cors')
const express = require('express');

const app = express();

app.use(cors());   //ALLOWING THW FRONTEND TO ACCESS THE BACKEND

const statusCodes={
    200:{message:"Ok - everything is great",color:"lightgreen"},
    201:{message:"Created - new resurce added successfully",color:"lightblue"},
    301:{message:"Moved permantely-The page has moved",color:"orange"},
    302:{message:"Found Temp",color:"yellow"},
    400:{message:"Bed request",color:"red"},
    401:{message:"Unautorixhed",color:"darkred"},
   404:{message:"file not found",color:"gray"},
   
};

app.get('/status/:code',(req,res)=>{
    const code = req.params.code;
    const response = statusCodes[code] || {message:"unkown status Code!",color:"white"};
    res.json(response)
});

app.listen(3000,()=>{
    console.log("server ruuning at http://localhost:3000/")
})
