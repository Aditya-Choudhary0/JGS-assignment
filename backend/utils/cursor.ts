import { Types } from 'mongoose';
import * as crypto from 'crypto';

export const encodeCursor = (id: string) => {
  const buffer = Buffer.from(id, 'utf-8');
  const encoded = crypto
    .createHash('sha256')
    .update(buffer)
    .digest('base64');
  return encoded;
};

export const decodeCursor = (cursor: string) => {
  const buffer = Buffer.from(cursor, 'base64');
  const decoded = buffer.toString('utf-8');
  return decoded;
};

export const createPaginationQuery = (cursor: string, limit: number) => {
  const query: any = {};
  if (cursor) {
    const decodedCursor = decodeCursor(cursor);
    query._id = { $gt: new Types.ObjectId(decodedCursor) }; // Only fetch records with IDs greater than the decoded cursor.
  }
  return {
    query,
    limit,
  };
};
