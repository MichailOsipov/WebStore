import * as React from 'react';

export const ProductItem = ({name, onRemoveItem}) => (
    <div>
        {name}
        <button onClick={onRemoveItem}>Удалить</button>
    </div>
);
