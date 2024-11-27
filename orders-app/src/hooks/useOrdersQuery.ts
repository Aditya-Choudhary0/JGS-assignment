import { useInfiniteQuery } from 'react-query';
import { getOrders } from '../utils/api';

interface OrdersResponse {
  data: Array<any>;
  nextCursor: string | null;
  totalCount: number;
}

export const useOrdersQuery = (limit: number, sort: string, sortDirection: string) => {
  return useInfiniteQuery(
    ['orders', limit, sort, sortDirection],
    async ({ pageParam = null }) => {
      return getOrders(pageParam, limit, sort, sortDirection);
    },
    {
      getNextPageParam: (lastPage: OrdersResponse) => lastPage.nextCursor,
      keepPreviousData: true,
    }
  );
};
