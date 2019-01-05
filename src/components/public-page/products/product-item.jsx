import * as React from 'react';
import Button from '@material-ui/core/Button';

export const ProductItem = ({id, name, onOpenProductInformation}) => (
    <div key={id}>
        <div>id: {id}</div>
        <div>{name}</div>
        <Button variant="contained" onClick={onOpenProductInformation}>Подробнее</Button>
    </div>
);
