import mongoose from 'mongoose';

let dbReady = false;

export const isDatabaseAvailable = () => dbReady;

export const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI;
  if (!mongoUri) {
    console.warn('MONGO_URI is not set. Running in limited mock mode.');
    dbReady = false;
    return false;
  }

  try {
    await mongoose.connect(mongoUri, { dbName: process.env.MONGO_DB_NAME });
    dbReady = true;
    console.log('MongoDB connected');
    return true;
  } catch (error) {
    dbReady = false;
    console.error('MongoDB connection failed. Running in limited mock mode:', error.message);
    return false;
  }
};
