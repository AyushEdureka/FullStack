//http- module
const http = require('http');

//Create a server that will reposnd with any of the request
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type' : 'text/plain'});
    res.end('How are you?')
});

server.listen(4001,()=>{
    console.log('Server is ruuning on http://localhost:4001');
});