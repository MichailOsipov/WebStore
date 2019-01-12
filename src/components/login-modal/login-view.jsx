import * as React from 'react';
import {Button, Typography, Grid} from '@material-ui/core';
import {LoginModalForm} from './login-modal-form';

export const LoginView = ({onLogin, onGoMainPage}) => (
    <Grid container direction="column" spacing={16}>
        <Grid item>
            <Typography variant="h6">Авторизация</Typography>
        </Grid>
        <Grid item>
            <LoginModalForm />
        </Grid>
        <Grid item>
            <Button variant="contained" onClick={onLogin}>Логин</Button>
            <Button onClick={onGoMainPage}>Назад</Button>
        </Grid>
    </Grid>
);
