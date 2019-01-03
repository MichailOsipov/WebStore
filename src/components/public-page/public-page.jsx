import * as React from 'react';

export const PublicPage = ({goTo}) => (
    <div>
        PublicPage, it will be everywhere
        <button onClick={() => goTo.registration()}>To registration</button>
        <button onClick={() => goTo.login()}>To login</button>
        <button onClick={() => goTo.productInformation(5)}>To productInformation</button>
        <button onClick={() => goTo.shoppingCart()}>To shoppingCart</button>
        <button onClick={() => goTo.orders()}>To orders</button>
    </div>
);
