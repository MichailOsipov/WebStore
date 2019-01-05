import * as React from 'react';
import {Button, Typography} from '@material-ui/core';
import {LoginModalForm} from './login-modal-form';

export const LoginView = ({onLogin, onGoMainPage}) => (
    <div>
        <Typography variant="h6">Авторизация</Typography>
        <LoginModalForm />
        <Button variant="contained" onClick={onLogin}>Логин</Button>
        <Button onClick={onGoMainPage}>Назад</Button>
    </div>
);
