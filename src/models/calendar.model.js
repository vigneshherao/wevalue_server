const mongoose = require('mongoose');

const calendarEventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  visibility: { type: String, enum: ['tutee', 'tutor', 'all'], default: 'all' },
});

module.exports = mongoose.model('CalendarEvent', calendarEventSchema);
