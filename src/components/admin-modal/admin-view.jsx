import * as React from 'react';
import Button from '@material-ui/core/Button';
import {CreateProductForm} from './create-product-form';
import {AllOrdersView} from './all-orders-view';

export const AdminView = ({
    createNewProduct,
    allOrders,
    onGoMainPage,
    confirmOrder
}) => (
    <div>
        <div>Страница администратора</div>
        <CreateProductForm />
        <Button variant="contained" onClick={createNewProduct}>Создать новый товар</Button>
        <AllOrdersView allOrders={allOrders} confirmOrder={confirmOrder} />
        <Button onClick={onGoMainPage}>На главную</Button>
    </div>
);
