const mongoose = require('mongoose');
require('dotenv').config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_MONGODB_URL)
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
};

module.exports = connectDB;