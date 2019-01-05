import * as React from 'react';
import {OrderItem} from './order-item';

export const OrdersView = ({orders}) => (
    <div>
        {orders.map(({id, products}) => (
            <div key={id}>
                <OrderItem products={products} /><br />
            </div>
        ))}
    </div>
);
