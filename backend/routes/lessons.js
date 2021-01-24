const router = require('express').Router();
let Lesson = require('../models/lesson.model');

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

module.exports = router;
