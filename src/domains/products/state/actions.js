export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_PRODUCT_INFO = 'SET_PRODUCT_INFO';
export const SET_PRODUCTS_ADDED_TO_CART = 'SET_PRODUCTS_ADDED_TO_CART';
export const SET_ORDERS = 'SET_ORDERS';
export const SET_ALL_ORDERS = 'SET_ALL_ORDERS';

export const setProducts = ({products}) => ({type: SET_PRODUCTS, payload: {products}});
export const setProductInfo = ({productInfo}) => ({type: SET_PRODUCT_INFO, payload: {productInfo}});
export const setProductsAddedToCart = ({products}) => ({type: SET_PRODUCTS_ADDED_TO_CART, payload: {products}});
export const setOrders = ({orders}) => ({type: SET_ORDERS, payload: {orders}});
export const setAllOrders = ({orders}) => ({type: SET_ALL_ORDERS, payload: {orders}});
