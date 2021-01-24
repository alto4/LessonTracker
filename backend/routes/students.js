const router = require('express').Router();
let Student = require('../models/student.model');

// GET - route to retrieve all students
router.route('/').get((req, res) => {
  // Attempt to find students from database, returns a promise
  Student.find()
    // Get JSON data for all students
    .then(students => res.json(students))
    // If error is presented in request, display error
    .catch(err => res.status(400).json('Error ' + err)); 
});

// POST - route to add new student to roster
router.route('/add').post((req, res) => {
  const name = req.body.name;

  // Create new student instance
  const newStudent = new Student({ name });

  // Save new student to the database
  newStudent.save()
    .then(() => res.json('Student successfully added.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
