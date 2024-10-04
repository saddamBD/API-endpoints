const express = require("express");
const cors = require("cors");
const app = express();
const courses = require("./Courses.json");

app.use(cors());

// Endpoint to get all courses
app.get("/api/courses", (req, res) => {
  res.json(courses);
});

// Endpoint to get a specific course by ID
app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((p) => p._id === req.params.id);
  if (course) {
    res.json(course);
  } else {
    res.status(404).send("course not found");
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
