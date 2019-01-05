import * as React from 'react';
import {Orders} from './orders';

export const AllOrdersView = ({allOrders}) => (
    <div>
        {allOrders.map(({user, orders}) => (
            <div key={user}>
                <div>{user}</div>
                <Orders orders={orders} /><br />
            </div>
        ))}
    </div>
);
