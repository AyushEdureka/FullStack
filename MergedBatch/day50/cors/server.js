const express = require('express');
const cors = require('cors');
const app= express();
const PORT = 3300;

app.use(cors());  //Permission Given to Share the resouce from Different Origin or address
app.use(express.json());

app.post('/login',(req,res)=>{

const {name,email} = req.body;

//Simple Validation
if(name && email){
res.json( {message: `Welcome Onbaord ${name}`});

}else{
res.status(400).json({message:'Name and Email are Required'})

}

});

app.listen(PORT,()=>{
    console.log(`SerVer backedn running at http://localhost:${PORT}`);
});