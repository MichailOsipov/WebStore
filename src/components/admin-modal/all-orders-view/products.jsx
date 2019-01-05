import * as React from 'react';

export const Products = ({products}) => (
    <div>
        {products.map(({id, name}) => (
            <div key={id}>
                <div>{name}</div>
            </div>
        ))}
    </div>
);
