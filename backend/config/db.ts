import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/orders';
    await mongoose.connect(dbURI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;
