const mongoose = require('mongoose');

const doubtSchema = new mongoose.Schema({
  question: String,
  askedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Tutee' },
  answeredBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Tutor' },
  answer: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Doubt', doubtSchema);
