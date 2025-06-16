const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ['tutee', 'tutor', 'admin'], required: true },
    phone: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
