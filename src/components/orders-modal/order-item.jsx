import * as React from 'react';
import {ProductCard} from 'components/product-card';

export const OrderItem = ({products}) => (
    <div>
        {products.map(({id, name, imageSrc}) => (
            <ProductCard
                key={id}
                name={name}
                imageSrc={imageSrc}
            />
        ))}
    </div>
);
