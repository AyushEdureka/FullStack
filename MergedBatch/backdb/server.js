const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require("cors");

const app=express();
app.use(cors());
app.use(bodyParser.json());

//Connect to MongoDb compass database
mongoose.connect("mongodb://127.0.0.1:27017/todoDB");

//Schema : which type of data will be stored:BLUEPRINT
//todLISt
//TASK:string
const taskSchema = new mongoose.Schema({
    title:String,
    completed:Boolean,  //true or false
});

//Adding the data inside our collection-model
const Task = mongoose.model("Task",taskSchema)


//Routes-get,post
app.get("/tasks",async(req,res)=>{
    const tasks = await Task.find();  //find the data from the database ,get the information
    res.json(tasks);
});


//Add new task-post()-send the data
app.post("/tasks",async(req,res)=>{
    const newTask = new Task({title:req.body.title , completed:false});
    await newTask.save(); // it will save your task
    res.json(newTask)
});

//3. update operation put
app.put("/tasks/:id",async(req,res)=>{
    await Task.findByIdAndUpdate(req.params.id,{completed:true});
    res.json({message:"Task updated"});
})

//4.delete the data from database
app.delete("/tasks/:id",async(req,res)=>{
    await Task.findByIdAndDelete(req.params.id);
    res.json({message:"Task Deleted"});
})

app.listen(3000,()=>{
    console.log("Server ruuning on http://localhost:3000");
});






