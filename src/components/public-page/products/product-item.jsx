import * as React from 'react';
import {Button} from '@material-ui/core';

export const ProductItem = ({id, name, onOpenProductInformation}) => (
    <div key={id}>
        {name}
        <Button variant="contained" onClick={onOpenProductInformation}>Подробнее</Button>
    </div>
);
