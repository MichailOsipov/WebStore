import * as React from 'react';

export const OrderItem = ({products}) => (
    <div>
        {products.map(({id, name}) => (
            <div key={id}>{name}</div>
        ))}
    </div>
);
