import * as React from 'react';
import {reduxForm, Field} from 'redux-form';
import {REGISTRATION_MODAL_FORM_NAME} from './registration-modal-form-name';

export const RegistrationModalForm = reduxForm({
    form: REGISTRATION_MODAL_FORM_NAME
})(() => (
    <div>
        <label>Имя:</label><Field name="name" component="input" /><br />
        <label>Логин:</label><Field name="login" component="input" /><br />
        <label>Пароль:</label><Field name="password" type="password" component="input" />
    </div>
));
