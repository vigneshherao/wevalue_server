const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  tuteeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tutee' },
  title: String,
  description: String,
  completed: { type: Boolean, default: false },
  dueDate: Date,
});

module.exports = mongoose.model('Todo', todoSchema);
