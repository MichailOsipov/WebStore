import {REGISTRATION_MODAL_NAME, RegistrationModal} from 'components/registration-modal';
import {LOGIN_MODAL_NAME, LoginModal} from 'components/login-modal';
import {PRODUCT_INFORMATION_MODAL_NAME, ProductInformation} from 'components/product-information-modal';
import {SHOPPING_CART_MODAL_NAME, ShoppingCartModal} from 'components/shopping-cart-modal';
import {ORDERS_MODAL_NAME, Orders} from 'components/orders-modal';

export const MODALS = {
    [REGISTRATION_MODAL_NAME]: {
        Component: RegistrationModal,
        size: 'small',
        position: 'center'
    },
    [LOGIN_MODAL_NAME]: {
        Component: LoginModal,
        size: 'small',
        position: 'center'
    },
    [PRODUCT_INFORMATION_MODAL_NAME]: {
        Component: ProductInformation,
        size: 'large',
        position: 'right'
    },
    [SHOPPING_CART_MODAL_NAME]: {
        Component: ShoppingCartModal,
        size: 'large',
        position: 'right'
    },
    [ORDERS_MODAL_NAME]: {
        Component: Orders,
        size: 'large',
        position: 'right'
    }
};
