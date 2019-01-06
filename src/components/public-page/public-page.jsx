import * as React from 'react';
import {connect} from 'react-redux';
import {AppBar, Typography, Button} from '@material-ui/core';
import {logout, getAuthorizedStatus} from 'domains/user/state';
import {Products} from './products';

export const PublicPage = connect(
    state => ({
        authorizedStatus: getAuthorizedStatus(state)
    }),
    {
        logout
    }
)(({
    goTo,
    logout,
    authorizedStatus
}) => (
    <div>
        <AppBar position="static" color="default" style={{flexDirection: 'row'}}>
            <Typography variant="h6" color="inherit" >
                WebStorage
            </Typography>
            <div>
                <Button color="inherit" onClick={goTo.shoppingCart}>Корзина</Button>
                <Button color="inherit" onClick={goTo.orders}>Заказы</Button>
                {/* rolecheck */}
                <Button color="inherit" onClick={goTo.admin}>Страница администратора</Button>
            </div>
            <div style={{flexGrow: 1}} />
            {authorizedStatus
                ? (
                    <Button color="inherit" onClick={logout}>Выход</Button>
                )
                : (
                    <div>
                        <Button color="inherit" onClick={goTo.registration}>Зарегистрироваться</Button>
                        <Button color="inherit" onClick={goTo.login}>Авторизоваться</Button>
                    </div>
                )
            }
        </AppBar>
        <Products onOpenProductInformation={goTo.productInformation} />
    </div>
));
