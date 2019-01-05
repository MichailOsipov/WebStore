import * as React from 'react';
import {Button} from '@material-ui/core';
import {Products} from './products';

export const Orders = ({orders, confirmOrder}) => (
    <div>
        {orders.map(({id, products}) => (
            <div key={id}>
                <Products products={products} />
                <Button onClick={() => confirmOrder(id)} variant="contained">Подтвердить</Button>
            </div>
        ))}
    </div>
);
