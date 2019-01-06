import {REGISTRATION_MODAL_NAME, RegistrationModal} from 'components/registration-modal';
import {LOGIN_MODAL_NAME, LoginModal} from 'components/login-modal';
import {PRODUCT_INFORMATION_MODAL_NAME, ProductInformation} from 'components/product-information-modal';
import {SHOPPING_CART_MODAL_NAME, ShoppingCartModal} from 'components/shopping-cart-modal';
import {ORDERS_MODAL_NAME, Orders} from 'components/orders-modal';
import {ADMIN_MODAL_NAME, AdminModal} from 'components/admin-modal';

export const MODALS = {
    [REGISTRATION_MODAL_NAME]: {
        Component: RegistrationModal,
        size: 'small',
        type: 'dialog'
    },
    [LOGIN_MODAL_NAME]: {
        Component: LoginModal,
        size: 'small',
        type: 'dialog'
    },
    [PRODUCT_INFORMATION_MODAL_NAME]: {
        Component: ProductInformation,
        size: 'large',
        type: 'drawer'
    },
    [SHOPPING_CART_MODAL_NAME]: {
        Component: ShoppingCartModal,
        size: 'large',
        type: 'drawer'
    },
    [ORDERS_MODAL_NAME]: {
        Component: Orders,
        size: 'large',
        type: 'drawer'
    },
    [ADMIN_MODAL_NAME]: {
        Component: AdminModal,
        size: 'large',
        type: 'drawer'
    }
};
