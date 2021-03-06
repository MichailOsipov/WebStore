import {MOCK_PRODUCTS} from './mock-products';
import {MOCK_PRODUCT} from './mock-product';
import {MOCK_PRODUCTS_ADDED_TO_CART} from './mock-products-added-to-cart';
import {MOCK_ORDERS} from './mock-orders';
import {MOCK_ALL_ORDERS} from './mock-all-orders';

export const ProductsApi = {
    loadProducts: () => Promise.resolve(MOCK_PRODUCTS),
    loadProduct: productId => Promise.resolve(MOCK_PRODUCT),
    addProductToCart: productId => Promise.resolve(),
    loadProductsAddedToCart: () => Promise.resolve(MOCK_PRODUCTS_ADDED_TO_CART),
    removeProductFromCart: productId => Promise.resolve(),
    makeAnOrder: () => Promise.resolve(),
    loadOrders: () => Promise.resolve(MOCK_ORDERS),
    // admin
    createProduct: ({name, description}) => Promise.resolve(),
    loadAllOrders: () => Promise.resolve(MOCK_ALL_ORDERS),
    confirmOrder: orderId => Promise.resolve()
};
