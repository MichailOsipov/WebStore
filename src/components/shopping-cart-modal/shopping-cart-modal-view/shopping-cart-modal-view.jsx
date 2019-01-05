import * as React from 'react';
import {ProductItem} from './product-item';

export const ShoppingCartModalView = ({productsAddedToCart, removeProductFromCart}) => (
    <div>
        {productsAddedToCart.map(({id, name}) => (
            <ProductItem
                key={id}
                name={name}
                onRemoveItem={() => removeProductFromCart(id)}
            />
        ))}
    </div>
);
