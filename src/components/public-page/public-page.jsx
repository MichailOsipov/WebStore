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
        <button onClick={goTo.registration}>Зарегистрироваться</button>
        <button onClick={goTo.login}>Авторизоваться</button>
        <button onClick={logout}>Выход</button>
        <button onClick={goTo.shoppingCart}>Корзина</button>
        <button onClick={goTo.orders}>Заказы</button>
        <button onClick={goTo.admin}>Страница администратора</button>
        <Products onOpenProductInformation={goTo.productInformation} />
    </div>
));
