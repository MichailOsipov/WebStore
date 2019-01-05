import * as React from 'react';
import {reduxForm, Field} from 'redux-form';
import {LOGIN_MODAL_FORM_NAME} from './login-modal-form-name';

export const LoginModalForm = reduxForm({
    form: LOGIN_MODAL_FORM_NAME
})(() => (
    <div>
        <label>Логин:</label><Field name="login" component="input" /><br />
        <label>Пароль:</label><Field name="password" type="password" component="input" />
    </div>
));
