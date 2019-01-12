import * as React from 'react';
import {Button, Typography, Grid} from '@material-ui/core';
import {CreateProductForm} from './create-product-form';
import {AllOrdersView} from './all-orders-view';

export const AdminView = ({
    createNewProduct,
    allOrders,
    onGoMainPage,
    confirmOrder
}) => (
    <Grid container direction="column" spacing={16}>
        <Grid item>
            <Typography variant="h6">Страница администратора</Typography>
        </Grid>
        <Grid item>
            <Button onClick={onGoMainPage}>На главную</Button>
        </Grid>
        <Grid item>
            <CreateProductForm />
        </Grid>
        <Grid item>
            <Button variant="contained" onClick={createNewProduct}>Создать новый товар</Button>
        </Grid>
        <Grid item>
            <AllOrdersView allOrders={allOrders} confirmOrder={confirmOrder} />
        </Grid>
    </Grid>
);
