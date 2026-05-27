export const isDatabaseAvailable = () => false;

export const connectDB = async () => {
  console.warn('MongoDB integration is temporarily disabled. Running with mock data only.');
  return false;
};
