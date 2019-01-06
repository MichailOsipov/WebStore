import * as React from 'react';
import {Button, Typography} from '@material-ui/core';
import {ProductItem} from './product-item';

export const ShoppingCartModalView = ({
    makeAnOrder,
    productsAddedToCart,
    removeProductFromCart,
    onGoMainPage
}) => (
    <div>
        <Typography variant="h6">Корзина</Typography>
        {productsAddedToCart.map(({id, name, imageSrc}) => (
            <ProductItem
                key={id}
                name={name}
                imageSrc={imageSrc}
                onRemoveItem={() => removeProductFromCart(id)}
            />
        ))}
        <Button variant="contained" onClick={makeAnOrder}>Сделать заказ</Button>
        <Button onClick={onGoMainPage}>На главную</Button>
    </div>
);
