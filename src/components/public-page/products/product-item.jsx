import * as React from 'react';

export const ProductItem = ({id, name, onOpenProductInformation}) => (
    <div key={id}>
        <div>id: {id}</div>
        <div>{name}</div>
        <button onClick={onOpenProductInformation}>Подробнее</button>
    </div>
);
