import * as React from 'react';
import {reduxForm, Field} from 'redux-form';
import {TextInput} from 'components/inputs/text-input';
import {REGISTRATION_MODAL_FORM_NAME} from './registration-modal-form-name';

export const RegistrationModalForm = reduxForm({
    form: REGISTRATION_MODAL_FORM_NAME
})(() => (
    <div>
        <Field
            name="name"
            label="Имя"
            component={TextInput}
        />
        <br />
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
