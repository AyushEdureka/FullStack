const express = require('express')
const cors = require('cors')

const app = express();
const PORT=5000;

//use cors as middleware
app.use(cors());  //cors allow us to share the resource from different web domian

//parse json
app.use(express.json());

//
app.post('/login',(req,res)=>{
    const {name,email} = req.body

    //simple validation
    if(name && email){
         res.json({message:`Welcome to Amazon ${name}`});

    }else{
          res.status(400).json({message:'Name and email are requied'});
    }
});

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})