import * as React from 'react';

export const ProductInfoView = ({productInfo}) => {
    const {name, description} = productInfo || {};
    return (
        <div>
            {name}<br />
            {description}
        </div>
    );
};
