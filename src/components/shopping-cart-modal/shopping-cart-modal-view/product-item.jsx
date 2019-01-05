import * as React from 'react';
import Button from '@material-ui/core/Button';

export const ProductItem = ({name, onRemoveItem}) => (
    <div>
        {name}
        <Button variant="contained" onClick={onRemoveItem}>Удалить</Button>
    </div>
);
