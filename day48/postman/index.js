//Import the Express module
const express = require('express')
const app=express();

//use express.json()
app.use(express.json());

//Dummy data: a list of book
let books = [
    {id:1 , title:'Book one',author:'Author one'},
    {id:2 , title:'Book Two',author:'Author Two'}
  
];

const PORT=3000;

//1. Get method
app.get('/books',(req,res)=>{
    res.json(books)
})

//2.POST- to send the data
app.post('/books',(req,res)=>{
    const newBook = req.body;
    newBook.id = books.length + 1;
    books.push(newBook);
    res.status(201).json(newBook);// send back the new book with status code 201
});

//DELETE DATA
app.delete('/books/:id',(req,res) =>{
    const bookId = parseInt(req.params.id);
    books = books.filter(b => b.id !== bookId);

    res.status(204).send();
});




//start the server
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
});