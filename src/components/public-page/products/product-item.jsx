import * as React from 'react';
import {Button} from '@material-ui/core';
import {ProductCard} from 'components/product-card';

export const ProductItem = ({name, imageSrc, onOpenProductInformation}) => (
    <ProductCard
        name={name}
        imageSrc={imageSrc}
        actions={(
            <Button
                onClick={onOpenProductInformation}
                size="small"
                color="primary"
            >
                Подробнее
            </Button>
        )}
    />
);
