import mongoose from 'mongoose';
import Order from '../models/order';
import { randomIntFromInterval } from './utils';

mongoose.connect('mongodb://localhost:27017/orders')
  .then(() => {
    console.log('Connected to MongoDB for seeding...');
    seedData();
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  });

const seedData = async () => {
  const orders = [];
  for (let i = 0; i < 10000; i++) {
    const order = new Order({
      customerName: `Customer ${i + 1}`,
      orderAmount: randomIntFromInterval(50, 500),
      status: ['pending', 'processing', 'completed', 'cancelled'][randomIntFromInterval(0, 3)],
      items: [
        { name: `Item ${i + 1}`, quantity: randomIntFromInterval(1, 5), price: randomIntFromInterval(10, 100) },
      ],
      createdAt: new Date(Date.now() - randomIntFromInterval(0, 365) * 24 * 60 * 60 * 1000),
    });
    orders.push(order);
  }

  await Order.insertMany(orders);
  console.log('Database seeded with 10,000 orders!');
  mongoose.connection.close();
};
