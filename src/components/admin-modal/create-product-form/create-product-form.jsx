import * as React from 'react';
import {reduxForm, Field} from 'redux-form';
import {TextInput} from 'components/inputs/text-input';
import {CREATE_PRODUCT_FORM_NAME} from './create-product-form-name';

export const CreateProductForm = reduxForm({
    form: CREATE_PRODUCT_FORM_NAME
})(() => (
    <div>
        <Field
            name="name"
            label="Название товара"
            component={TextInput}
        />
        <br />
        <Field
            name="description"
            label="Описание товара"
            component={TextInput}
            multiline
            rowsMax="4"
        />
    </div>
));
