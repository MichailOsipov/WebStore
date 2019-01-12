import * as React from 'react';
import {Button, Grid} from '@material-ui/core';
import {Products} from './products';

export const Orders = ({orders, confirmOrder}) => (
    <Grid container direction="column" spacing={40}>
        {orders.map(({id, products}) => (
            <Grid item key={id}>
                <Grid container direction="column" spacing={16}>
                    <Grid item>
                        <Products products={products} />
                    </Grid>
                    <Grid item>
                        <Button onClick={() => confirmOrder(id)} variant="contained">Подтвердить</Button>
                    </Grid>
                </Grid>
            </Grid>
        ))}
    </Grid>
);
