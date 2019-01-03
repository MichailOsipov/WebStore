import * as React from 'react';

export const Orders = ({params}) => (
    <div>
        Orders
        <button onClick={() => params.goTo.mainPage()}>Go to mainPage</button>
    </div>
);
