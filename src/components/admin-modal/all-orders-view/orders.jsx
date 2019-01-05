import * as React from 'react';
import {Products} from './products';

export const Orders = ({orders}) => (
    <div>
        {orders.map(({id, products}) => (
            <div key={id}>
                <Products products={products} />
                <button>Подтвердить</button>
            </div>
        ))}
    </div>
);
