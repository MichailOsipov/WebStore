import * as React from 'react';

export const ShoppingCartModal = ({params}) => (
    <div>
        ShoppingCartModal
        <button onClick={() => params.goTo.mainPage()}>Go to mainPage</button>
    </div>
);
