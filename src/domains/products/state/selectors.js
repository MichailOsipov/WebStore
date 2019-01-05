import {createSelector} from 'reselect';
import {getDomain} from 'store/root-selector';
import {PRODUCTS_STORE_KEY} from './store-key';

const getProductsDomain = getDomain(PRODUCTS_STORE_KEY);

export const getProducts = createSelector(
    getProductsDomain,
    ({products}) => products
);

export const getProductInfo = createSelector(
    getProductsDomain,
    ({productInfo}) => productInfo
);

export const getProductsAddedToCart = createSelector(
    getProductsDomain,
    ({productsAddedToCart}) => productsAddedToCart
);

export const getOrders = createSelector(
    getProductsDomain,
    ({orders}) => orders
);

export const getAllOrders = createSelector(
    getProductsDomain,
    ({allOrders}) => allOrders
);
