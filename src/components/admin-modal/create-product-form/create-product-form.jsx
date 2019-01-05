import * as React from 'react';
import {reduxForm, Field} from 'redux-form';
import {CREATE_PRODUCT_FORM_NAME} from './create-product-form-name';

export const CreateProductForm = reduxForm({
    form: CREATE_PRODUCT_FORM_NAME
})(() => (
    <div>
        <label>Название товара:</label>
        <Field name="name" component="input" /><br />
        <label>Описание товара:</label>
        <Field name="description" component="input" /><br />
    </div>
));
