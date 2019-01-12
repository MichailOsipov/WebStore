import * as React from 'react';
import {ProductCard} from 'components/product-card';
import {Grid} from '@material-ui/core';

export const OrderItem = ({products}) => (
    <Grid container direction="row" spacing={16}>
        {products.map(({id, name, imageSrc}) => (
            <Grid item xs={3}>
                <ProductCard
                    key={id}
                    name={name}
                    imageSrc={imageSrc}
                />
            </Grid>
        ))}
    </Grid>
);
