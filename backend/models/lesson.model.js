const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lessonSchema = new Schema({
  student: { type: String, required: true },
  date: { type: Date, required: true },
  length: { type: Number, required: true },
  plan: { type: String },
  notes: { type: String },
  resources: { type: String },
  comments: { type: String },
}, {
  timestamps: true,
});

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;