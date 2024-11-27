import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import orderRoutes from './routes/orderRoutes';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use('/api', orderRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
