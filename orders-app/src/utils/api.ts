import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Change to your backend URL
});

export const getOrders = async (cursor: string | null, limit: number, sort: string, sortDirection: string) => {
  const response = await api.get('/orders', {
    params: { cursor, limit, sort, sortDirection },
  });
  return response.data;
};
