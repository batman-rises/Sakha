// backend/createUser.js
import mongoose from 'mongoose';
import User from './models/User.js';

mongoose
  .connect(
    'mongodb+srv://pbinayak604:KUbizeTwzc89lcfy@sakha.aca6akf.mongodb.net/?retryWrites=true&w=majority&appName=Sakha'
  )
  .then(async () => {
    const user = await User.create({
      name: 'Test User',
      email: 'test@example.com', // Matches login input
      password: 'testpass', // Will be hashed by pre-save middleware
    });
    console.log('Test user created:', user);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });