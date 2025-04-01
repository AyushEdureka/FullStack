const express = require('express'); 
const axios = require('axios'); 
const app = express();
const PORT = 3300;

const CAT_API_URL ='https://api.thecatapi.com/v1/images/search'
const DOG_API_URL= 'https://dog.ceo/api/breeds/image/random';

//Show Random cat and dog
app.get('/cat-vs-dog',async(req,res)=>{

   try{
  
    const catResponse = await axios.get(CAT_API_URL);
    const dogResponse = await axios.get(DOG_API_URL);  //data got in my server

    res.send(
        `
        <h1>Catcat🐈 vs Dog🐶</h1>
        <img src="${catResponse.data[0].url}" alt="Cat" style="width:300px; height:auto">
        <img src="${dogResponse.data.message}" alt="Dog" style="width:300px; height:auto">
        <br>
        <button onclick="window.location.reload()">Reset</button>
        `
    );
   }catch(error){
    res.status(500).send('Error Loading Images');
   }

});

app.listen(PORT,()=>console.log(`Server Ruuning at http://localhost:${PORT}`));
