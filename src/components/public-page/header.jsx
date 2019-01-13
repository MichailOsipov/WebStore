import * as React from 'react';
import {AppBar, Typography, Button, Grid} from '@material-ui/core';

export const Header = ({
    authorizedStatus,
    name,
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
                        <Button color="inherit" onClick={goTo.admin}>Страница администратора</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                {authorizedStatus
                    ? (
                        <Grid container direction="row" alignItems="center">
                            <Grid item>
                                <Typography variant="subtitle1">{`Добро пожаловать, ${name}`}</Typography>
                            </Grid>
                            <Grid item>
                                <Button color="inherit" onClick={logout}>Выход</Button>
                            </Grid>
                        </Grid>
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
