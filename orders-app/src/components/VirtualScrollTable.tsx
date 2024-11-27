import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import { useOrdersQuery } from '../hooks/useOrdersQuery';
import { useState } from 'react';

const VirtualScrollTable: React.FC = () => {
  const [limit] = useState(50); // Number of rows per page
  const [sort] = useState('createdAt'); // Sorting field
  const [sortDirection] = useState('desc'); // Sorting direction

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useOrdersQuery(limit, sort, sortDirection);

  const rowRenderer = useCallback(
    ({ index, key, style }: { index: number; key: string; style: React.CSSProperties }) => {
      const order = data?.pages[index]?.data[index];

      if (!order) return <div key={key} style={style} />;

      return (
        <div key={key} style={style} className="table-row">
          <div>{order.customerName}</div>
          <div>{order.orderAmount}</div>
          <div>{order.status}</div>
          <div>{new Date(order.createdAt).toLocaleDateString()}</div>
        </div>
      );
    },
    [data]
  );

  const loadMoreRows = () => {
    if (hasNextPage) fetchNextPage();
  };

  return (
    <div>
      <div className="table-header">
        <div>Customer Name</div>
        <div>Amount</div>
        <div>Status</div>
        <div>Date</div>
      </div>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <List
          height={600}
          rowCount={data?.pages.length || 0}
          rowHeight={50}
          rowRenderer={rowRenderer}
          width={800}
          onScroll={({ scrollTop, clientHeight, scrollHeight }) => {
            if (scrollHeight - scrollTop === clientHeight && hasNextPage && !isFetchingNextPage) {
              loadMoreRows();
            }
          }}
        />
      )}

      {isFetchingNextPage && <div>Loading more...</div>}
    </div>
  );
};

export default VirtualScrollTable;
