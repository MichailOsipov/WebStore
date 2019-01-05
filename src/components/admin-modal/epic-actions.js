import {createProduct} from 'domains/products/state';
import {
    resetCreateProductForm,
    getInputName,
    getInputDescription
} from './create-product-form';

export const createNewProduct = () => (dispatch, getState) => {
    const name = getInputName(getState());
    const description = getInputDescription(getState());
    return dispatch(createProduct({name, description}))
        .then(() => dispatch(resetCreateProductForm));
};
