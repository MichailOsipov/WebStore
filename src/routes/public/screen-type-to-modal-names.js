import {REGISTRATION_MODAL_NAME} from 'components/registration-modal';
import {LOGIN_MODAL_NAME} from 'components/login-modal';
import {PRODUCT_INFORMATION_MODAL_NAME} from 'components/product-information-modal';
import {SHOPPING_CART_MODAL_NAME} from 'components/shopping-cart-modal';
import {ORDERS_MODAL_NAME} from 'components/orders-modal';
import {ADMIN_MODAL_NAME} from 'components/admin-modal';

export const screenTypeToModalNames = {
    registration: REGISTRATION_MODAL_NAME,
    login: LOGIN_MODAL_NAME,
    productInformation: PRODUCT_INFORMATION_MODAL_NAME,
    shoppingCart: SHOPPING_CART_MODAL_NAME,
    orders: ORDERS_MODAL_NAME,
    admin: ADMIN_MODAL_NAME
};
