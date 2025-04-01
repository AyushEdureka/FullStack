const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json()); // Middleware to handle JSON data

// Connect to MongoDB local instance
mongoose.connect("mongodb://127.0.0.1:27017/school", {

})

.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB Connection Error:", err));

// Define a Student Schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  grade: String,
  subjects: [String],
});

// Create a Model
const Student = mongoose.model("Student", studentSchema);  //collection name - student

// 📌 Route to Add a Student
app.post("/add-student", async (req, res) => {
  const newStudent = new Student(req.body);
  await newStudent.save();
  res.send("🎉 Student Added Successfully!");
});

// 📌 Route to Get All Students
app.get("/students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// 📌 Route to Update a Student
app.put("/update-student/:id", async (req, res) => {
  await Student.findByIdAndUpdate(req.params.id, req.body);
  res.send("✅ Student Updated Successfully!");
});

// 📌 Route to Delete a Student
app.delete("/delete-student/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.send("❌ Student Deleted Successfully!");
});

// Start the Server
app.listen(3000, () => console.log("🚀 Server running on port 3000"));
