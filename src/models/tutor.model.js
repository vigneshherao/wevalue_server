const mongoose = require('mongoose');

const tutorSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  subjects: [String],
  assignedClasses: [String],
  lessons: [{ title: String, videoUrl: String, notes: String }],
  quizzes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Assessment' }],
  doubtsReceived: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Doubt' }],
});

module.exports = mongoose.model('Tutor', tutorSchema);
