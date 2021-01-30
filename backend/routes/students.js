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

// GET - request to retrieve an individual lesson record
router.route('/:id').get((req, res) => {
  Student.findById(req.params.id)
    .then(student => res.json(student))
    .catch(err => res.status(400).json('Error: ' + error));
});

// POST - route to add new student to roster
router.route('/add').post((req, res) => {
  const name = req.body.name;
  const instrument = req.body.instrument;
  const age = Number(req.body.age);
  const parent = req.body.parent;
  const email = req.body.email;
  const phone = req.body.phone;

  // Create new student instance
  const newStudent = new Student({ 
    name,
    instrument, 
    age, 
    parent, 
    email, 
    phone 
  });

  // Save new student to the database
  newStudent.save()
    .then(() => res.json('Student successfully added.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// DELETE - request to delete a registered student
router.route('/:id').delete((req, res) => {
  Student.findByIdAndDelete(req.params.id)
    .then(() => res.json('Student deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// UPDATE - post request to update an existing student
router.route('/update/:id').post((req, res) => {
  Student.findById(req.params.id)
    .then(student =>{
      student.name = req.body.name;
      student.age = Number(req.body.age);
      student.parent = req.body.parent;
      student.email = req.body.email;
      student.phone = req.body.phone;
      student.instrument = req.body.instrument;    

      // Write updated lesson plans details to db
      student.save()
        .then(() => res.json('Student record updated.'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err))
});
module.exports = router;
