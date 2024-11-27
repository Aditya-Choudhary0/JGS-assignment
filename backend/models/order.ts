import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  price: Number,
});

const orderSchema = new mongoose.Schema(
  {
    customerName: String,
    orderAmount: Number,
    status: { type: String, enum: ['pending', 'processing', 'completed', 'cancelled'] },
    items: [itemSchema],
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
