import * as React from 'react';
import Button from '@material-ui/core/Button';
import {LoginModalForm} from './login-modal-form';

export const LoginView = ({onLogin, onGoMainPage}) => (
    <div>
        Авторизация
        <LoginModalForm />
        <Button variant="contained" onClick={onLogin}>Логин</Button>
        <Button onClick={onGoMainPage}>Назад</Button>
    </div>
);
