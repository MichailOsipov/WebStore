import * as React from 'react';
import {reduxForm, Field} from 'redux-form';
import {TextInput} from 'components/inputs/text-input';
import {LOGIN_MODAL_FORM_NAME} from './login-modal-form-name';

export const LoginModalForm = reduxForm({
    form: LOGIN_MODAL_FORM_NAME
})(() => (
    <div>
        <Field
            name="login"
            label="Логин"
            component={TextInput}
        />
        <br />
        <Field
            name="password"
            label="Пароль"
            type="password"
            component={TextInput}
        />
    </div>
));
