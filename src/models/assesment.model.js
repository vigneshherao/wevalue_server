const mongoose = require('mongoose');

const assessmentSchema = new mongoose.Schema({
  title: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Tutor' },
  questions: [
    {
      question: String,
      options: [String],
      correctAnswer: String,
    },
  ],
  assignedTo: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tutee' }],
  dueDate: Date,
});

module.exports = mongoose.model('Assessment', assessmentSchema);
