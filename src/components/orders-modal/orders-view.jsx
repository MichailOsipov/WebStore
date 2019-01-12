import * as React from 'react';
import {Button, Typography, Grid} from '@material-ui/core';
import {OrderItem} from './order-item';

export const OrdersView = ({orders, onGoMainPage}) => (
    <Grid container direction="column" spacing={16}>
        <Grid item>
            <Typography variant="h6">Заказы</Typography>
        </Grid>
        <Grid item>
            <Button onClick={onGoMainPage}>На главную</Button>
        </Grid>
        <Grid item>
            <Grid container direction="column" spacing={40}>
                {orders.map(({id, products}) => (
                    <Grid item>
                        <OrderItem key={id} products={products} />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    </Grid>
);
