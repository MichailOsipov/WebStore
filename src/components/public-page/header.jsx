import * as React from 'react';
import {AppBar, Typography, Button, Grid} from '@material-ui/core';

export const Header = ({
    authorizedStatus,
    goTo,
    logout
}) => (
    <AppBar position="static" color="default">
        <Grid container justify="space-between">
            <Grid item>
                <Grid container spacing={16}>
                    <Grid item>
                        <Typography variant="h4" color="inherit" >
                            WebStorage
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button color="inherit" onClick={goTo.shoppingCart}>Корзина</Button>
                        <Button color="inherit" onClick={goTo.orders}>Заказы</Button>
                        {/* rolecheck */}
                        <Button color="inherit" onClick={goTo.admin}>Страница администратора</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                {authorizedStatus
                    ? (
                        <Button color="inherit" onClick={logout}>Выход</Button>
                    )
                    : (
                        <React.Fragment>
                            <Button color="inherit" onClick={goTo.registration}>Зарегистрироваться</Button>
                            <Button color="inherit" onClick={goTo.login}>Авторизоваться</Button>
                        </React.Fragment>
                    )
                }
            </Grid>
        </Grid>
    </AppBar>
);
