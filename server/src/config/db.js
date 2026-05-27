import mongoose from 'mongoose';

let dbAvailable = false;

export const isDatabaseAvailable = () => dbAvailable;

export const connectDB = async () => {
  const uri = process.env.MONGO_URI || process.env.MONGODB_URI;
  if (!uri) {
    console.warn('MONGO_URI missing. Running in database-optional mode with mock/public-safe fallbacks.');
    dbAvailable = false;
    return false;
  }

  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(uri);
    dbAvailable = true;
    console.log('MongoDB connected');
    return true;
  } catch (error) {
    console.warn(`MongoDB unavailable (${error.message}). Running in fallback mode.`);
    dbAvailable = false;
    return false;
  }
};
