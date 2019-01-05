import * as React from 'react';
import Button from '@material-ui/core/Button';
import {OrderItem} from './order-item';

export const OrdersView = ({orders, onGoMainPage}) => (
    <div>
        Заказы
        {orders.map(({id, products}) => (
            <div key={id}>
                <OrderItem products={products} /><br />
            </div>
        ))}
        <Button onClick={onGoMainPage}>На главную</Button>
    </div>
);
