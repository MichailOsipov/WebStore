import * as React from 'react';
import {Grid, Typography} from '@material-ui/core';
import {Orders} from './orders';

export const AllOrdersView = ({allOrders, confirmOrder}) => (
    <Grid container direction="column" spacing={16}>
        {allOrders.map(({user, orders}) => (
            <Grid item key={user}>
                <Grid container direction="column" spacing={16}>
                    <Grid item>
                        <Typography variant="h6">{user}</Typography>
                    </Grid>
                    <Grid item>
                        <Orders orders={orders} confirmOrder={confirmOrder} />
                    </Grid>
                </Grid>
            </Grid>
        ))}
    </Grid>
);
