import * as React from 'react';
import Button from '@material-ui/core/Button';
import {ProductItem} from './product-item';

export const ShoppingCartModalView = ({
    makeAnOrder,
    productsAddedToCart,
    removeProductFromCart,
    onGoMainPage
}) => (
    <div>
        Корзина
        {productsAddedToCart.map(({id, name}) => (
            <ProductItem
                key={id}
                name={name}
                onRemoveItem={() => removeProductFromCart(id)}
            />
        ))}
        <Button variant="contained" onClick={makeAnOrder}>Сделать заказ</Button>
        <Button onClick={onGoMainPage}>На главную</Button>
    </div>
);
