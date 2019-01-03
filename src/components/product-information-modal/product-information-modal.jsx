import * as React from 'react';

export const ProductInformation = ({params}) => (
    <div>
        ProductInformation
        {params.entityId}
        <button onClick={() => params.goTo.mainPage()}>Go to mainPage</button>
    </div>
);
