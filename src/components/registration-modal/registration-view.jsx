import * as React from 'react';
import {Button, Typography} from '@material-ui/core';
import {RegistrationModalForm} from './registration-modal-form';

export const RegistrationView = ({onRegister, onGoMainPage}) => (
    <div>
        <Typography variant="h6">Регистрация</Typography>
        <RegistrationModalForm />
        <Button variant="contained" onClick={onRegister}>Зарегистрироваться</Button>
        <Button onClick={onGoMainPage}>Назад</Button>
    </div>
);
