import * as React from 'react';
import Button from '@material-ui/core/Button';
import {RegistrationModalForm} from './registration-modal-form';

export const RegistrationView = ({onRegister, onGoMainPage}) => (
    <div>
        Регистрация
        <RegistrationModalForm />
        <Button variant="contained" onClick={onRegister}>Зарегистрироваться</Button>
        <Button onClick={onGoMainPage}>Назад</Button>
    </div>
);
