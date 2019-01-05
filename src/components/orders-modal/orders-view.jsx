import * as React from 'react';
import {Button, Typography} from '@material-ui/core';
import {OrderItem} from './order-item';

export const OrdersView = ({orders, onGoMainPage}) => (
    <div>
        <Typography variant="h6">Заказы</Typography>
        {orders.map(({id, products}) => (
            <div key={id}>
                <OrderItem products={products} /><br />
            </div>
        ))}
        <Button onClick={onGoMainPage}>На главную</Button>
    </div>
);
