import * as React from 'react';
import {connect} from 'react-redux';
import {logout} from 'domains/user/state';
import {Products} from './products';

export const PublicPage = connect(
    null,
    {
        logout
    }
)(({
    goTo,
    logout
}) => (
    <div>
        PublicPage, it will be everywhere
        <button onClick={() => goTo.registration()}>To registration</button>
        <button onClick={() => goTo.login()}>To login</button>
        <button onClick={() => logout()}>Logout</button>
        <button onClick={() => goTo.productInformation(5)}>To productInformation</button>
        <button onClick={() => goTo.shoppingCart()}>To shoppingCart</button>
        <button onClick={() => goTo.orders()}>To orders</button>
        <Products onOpenProductInformation={goTo.productInformation} />
    </div>
));
