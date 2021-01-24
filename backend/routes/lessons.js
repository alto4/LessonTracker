const router = require('express').Router();
let Lesson = require('../models/lesson.model');
const { route } = require('./students');

// GET - route to retrieve all lessons
router.route('/').get((req, res) => {
  // Attempt to find lesson from database, returns a promise
  Lesson.find()
    // Get JSON data for all lessons
    .then(lessons => res.json(lessons))
    // If error is presented in request, display error
    .catch(err => res.status(400).json('Error ' + err)); 
});

// POST - route to add new lesson plan
router.route('/add').post((req, res) => {
  const student = req.body.student;
  const date = Date.parse(req.body.date);
  const length = req.body.length;
  const plan = req.body.plan;
  const notes = req.body.notes;
  const resources = req.body.resources;
  const comments = req.body.comments;

  // Create new student instance
  const newLesson = new Lesson({ 
    student,
    date,
    length,
    plan,
    notes,
    resources,
    comments,
  });

  // Save new student to the database
  newLesson.save()
    .then(() => res.json('Lesson successfully added.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// GET - request to retrieve an individual lesson record
router.route('/:id').get((req, res) => {
  Lesson.findById(req.params.id)
    .then(lesson => res.json(lesson))
    .catch(err => res.status(400).json('Error: ' + error));
});

// DELETE - request to delete an individual lesson record
router.route('/:id').delete((req, res) => {
  Lesson.findByIdAndDelete(req.params.id)
    .then(() => res.json('Lesson deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// UPDATE - post request to update an existing lesson plan
router.route('/update/:id').post((req, res) => {
  Lesson.findById(req.params.id)
    .then(lesson =>{
      lesson.student = req.body.student;
      lesson.date = Date.parse(req.body.date);
      lesson.length = req.body.length;
      lesson.plan = req.body.plan;
      lesson.notes = req.body.notes;
      lesson.resources = req.body.resources;
      lesson.comments = req.body.comments;

      // Write updated lesson plans details to db
      lesson.save()
        .then(() => res.json('Lesson updated.'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err))
});
module.exports = router;
