const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  managedClasses: [String],
});

module.exports = mongoose.model('Admin', adminSchema);
