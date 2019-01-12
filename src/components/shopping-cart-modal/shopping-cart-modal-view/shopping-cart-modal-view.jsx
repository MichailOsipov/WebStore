import * as React from 'react';
import {Grid, Button, Typography} from '@material-ui/core';
import {ProductItem} from './product-item';

export const ShoppingCartModalView = ({
    makeAnOrder,
    productsAddedToCart,
    removeProductFromCart,
    onGoMainPage
}) => (
    <Grid container spacing={16} direction="column">
        <Grid item>
            <Typography variant="h5">Корзина</Typography>
        </Grid>
        <Grid item>
            <Grid container spacing={16}>
                {productsAddedToCart.map(({id, name, imageSrc}) => (
                    <Grid item xs={3}>
                        <ProductItem
                            key={id}
                            name={name}
                            imageSrc={imageSrc}
                            onRemoveItem={() => removeProductFromCart(id)}
                        />
                    </Grid>
                ))}
            </Grid>
        </Grid>
        <Grid item>
            <Button variant="contained" onClick={makeAnOrder}>Сделать заказ</Button>
            <Button onClick={onGoMainPage}>На главную</Button>
        </Grid>
    </Grid>
);
