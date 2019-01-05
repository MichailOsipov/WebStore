import * as React from 'react';
import {Button} from '@material-ui/core';

export const ProductInfoView = ({
    productInfo,
    onGoShoppingCart,
    onAddProductToCart,
    onGoMainPage
}) => {
    const {name, description} = productInfo || {};
    return (
        <div>
            Информация о товаре:
            {name}<br />
            {description}
            <Button variant="contained" onClick={onAddProductToCart}>Добавить продукт в корзину</Button>
            <Button variant="contained" onClick={onGoShoppingCart}>Перейти в корзину</Button>
            <Button onClick={onGoMainPage}>На главную</Button>
        </div>
    );
};
