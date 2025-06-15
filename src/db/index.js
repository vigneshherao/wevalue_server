const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://vignesh:MSzA7aS1uoI44alb@cluster0.ao1473g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    );
    console.log('mongo server started');
  } catch (error) {
    throw new Error('Mongoose error failed');
  }
};

module.exports = connectDb;
