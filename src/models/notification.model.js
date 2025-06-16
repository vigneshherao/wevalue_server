const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  message: String,
  date: { type: Date, default: Date.now },
  target: { type: String, enum: ['tutee', 'tutor', 'all'], default: 'all' },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Notification', notificationSchema);
