const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log('mongo server started');
  } catch (error) {
    throw new Error('Mongoose error failed');
  }
};

module.exports = connectDb;
