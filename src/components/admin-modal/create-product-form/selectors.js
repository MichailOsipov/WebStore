import {formValueSelector} from 'redux-form';
import {CREATE_PRODUCT_FORM_NAME} from './create-product-form-name';

const valueSelector = formValueSelector(CREATE_PRODUCT_FORM_NAME);

export const getInputName = state => valueSelector(state, 'name');
export const getInputDescription = state => valueSelector(state, 'description');
