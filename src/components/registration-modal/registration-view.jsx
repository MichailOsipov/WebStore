import * as React from 'react';
import {Grid, Button, Typography} from '@material-ui/core';
import {RegistrationModalForm} from './registration-modal-form';

export const RegistrationView = ({onRegister, onGoMainPage}) => (
    <Grid container spacing={16} direction="column">
        <Grid item>
            <Typography variant="h6">Регистрация</Typography>
        </Grid>
        <Grid item>
            <RegistrationModalForm />
        </Grid>
        <Grid item>
            <Button variant="contained" onClick={onRegister}>Зарегистрироваться</Button>
            <Button onClick={onGoMainPage}>Назад</Button>
        </Grid>
    </Grid>
);
