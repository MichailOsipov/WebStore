import * as React from 'react';
import {Grid} from '@material-ui/core';
import {ProductCard} from 'components/product-card';

export const Products = ({products}) => (
    <Grid container spacing={16}>
        {products.map(({id, name, imageSrc}) => (
            <Grid item xs={3} key={id}>
                <ProductCard
                    name={name}
                    imageSrc={imageSrc}
                />
            </Grid>
        ))}
    </Grid>
);
