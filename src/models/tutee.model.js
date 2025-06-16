const mongoose = require('mongoose');

const tuteeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  class: String,
  age: Number,
  profilePic: String,
  todos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Todo' }],
  assessments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Assessment' }],
  doubts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Doubt' }],
});

module.exports = mongoose.model('Tutee', tuteeSchema);
