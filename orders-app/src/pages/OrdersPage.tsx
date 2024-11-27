import React from 'react';
import VirtualScrollTable from '../components/VirtualScrollTable';

const OrdersPage: React.FC = () => {
  return (
    <div>
      <h1>Orders</h1>
      <VirtualScrollTable />
    </div>
  );
};

export default OrdersPage;
