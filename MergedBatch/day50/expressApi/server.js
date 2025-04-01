const express = require('express');
const axios =  require('axios');  // fetch the data from API
const app = express();
const PORT = 3300;

//Code Logic
const CAT_API_URL = 'https://api.thecatapi.com/v1/images/search';
//This api will give random cat images evertime

//Fetch a random cat image
app.get('/random-cat', async (req,res)=>{

    try{
        const response =  await axios.get(CAT_API_URL);
           
      const  catImageUrl =  response.data[0].url;
     
      //send an HTMl page
      res.send(`
        <html>
            <head>
            <title>Randomcat</Title>
            </head>
            <body>
            <h1>RANDOM </h1>
            <img src="${catImageUrl}" style="border-radius:10px">
            </body>
        </html>
        
        
        
        `)
         

    }catch(error){
         res.status(500).json({error: `Error Fetching Cat Image`});
         // 500 - Server Error
    }

});


app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})