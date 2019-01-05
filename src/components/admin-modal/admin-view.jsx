import * as React from 'react';
import {Button, Typography} from '@material-ui/core';
import {CreateProductForm} from './create-product-form';
import {AllOrdersView} from './all-orders-view';

export const AdminView = ({
    createNewProduct,
    allOrders,
    onGoMainPage,
    confirmOrder
}) => (
    <div>
        <Typography variant="h6">Страница администратора</Typography>
        <CreateProductForm />
        <Button variant="contained" onClick={createNewProduct}>Создать новый товар</Button>
        <AllOrdersView allOrders={allOrders} confirmOrder={confirmOrder} />
        <Button onClick={onGoMainPage}>На главную</Button>
    </div>
);
