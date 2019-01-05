import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {modalsReducer, MODALS_STORE_KEY} from 'domains/modals';
import {userReducer, USER_STORE_KEY} from 'domains/user/state';
import {productsReducer, PRODUCTS_STORE_KEY} from 'domains/products/state';

export const rootReducer = combineReducers({
    form: formReducer,
    [MODALS_STORE_KEY]: modalsReducer,
    [USER_STORE_KEY]: userReducer,
    [PRODUCTS_STORE_KEY]: productsReducer
});
