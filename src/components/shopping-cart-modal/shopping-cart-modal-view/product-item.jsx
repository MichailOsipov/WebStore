import * as React from 'react';
import {Button} from '@material-ui/core';
import {ProductCard} from 'components/product-card';

export const ProductItem = ({name, imageSrc, onRemoveItem}) => (
    <ProductCard
        name={name}
        imageSrc={imageSrc}
        actions={(
            <Button
                onClick={onRemoveItem}
                size="small"
                color="primary"
            >
                Удалить
            </Button>
        )}
    />
);
