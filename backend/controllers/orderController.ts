import { Request, Response } from 'express';
import Order from '../models/order';
import { createPaginationQuery, encodeCursor } from '../utils/cursor';

const getOrders = async (req: Request, res: Response) => {
  try {
    const { cursor, limit = 50, sort = 'createdAt', sortDirection = 'desc' } = req.query;
    const parsedLimit = parseInt(limit as string);
    const parsedSortDirection = sortDirection === 'asc' ? 1 : -1;

    const validSortFields = ['createdAt', 'orderAmount', 'customerName', 'status'];

    const finalSortField = typeof sort === 'string' && validSortFields.includes(sort as string)
      ? sort
      : 'createdAt';

    const { query, limit: pageLimit } = createPaginationQuery(cursor as string, parsedLimit);

    const orders = await Order.find(query)
      .sort({ [finalSortField]: parsedSortDirection })
      .limit(pageLimit);

    const nextCursor = orders.length === parsedLimit
      ? encodeCursor(orders[orders.length - 1]._id.toString())
      : null;

    res.json({
      data: orders,
      nextCursor,
      totalCount: await Order.countDocuments(),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};

export { getOrders };
