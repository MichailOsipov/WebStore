import {ProductsApi} from '../api';
import {
    setProducts,
    setProductInfo,
    setProductsAddedToCart,
    setOrders,
    setAllOrders
} from './actions';

export const fetchProducts = () => dispatch =>
    ProductsApi.loadProducts()
        .then((products) => {
            dispatch(setProducts({products}));
        });

export const fetchProductInfo = productId => dispatch =>
    ProductsApi.loadProduct(productId)
        .then((productInfo) => {
            dispatch(setProductInfo({productInfo}));
        });

export const addProductToCart = productId => () =>
    ProductsApi.addProductToCart(productId);

export const fetchProductsAddedToCart = () => dispatch =>
    ProductsApi.loadProductsAddedToCart()
        .then((products) => {
            dispatch(setProductsAddedToCart({products}));
        });

export const removeProductFromCart = productId => dispatch =>
    ProductsApi.removeProductFromCart(productId)
        .then(() => dispatch(fetchProductsAddedToCart()));

export const makeAnOrder = () => dispatch =>
    ProductsApi.makeAnOrder()
        .then(() => dispatch(fetchProductsAddedToCart()));

export const fetchOrders = () => dispatch =>
    ProductsApi.loadOrders()
        .then((orders) => {
            dispatch(setOrders({orders}));
        });

export const createProduct = ({name, description}) => () =>
    ProductsApi.createProduct({name, description});

export const fetchAllOrders = () => dispatch =>
    ProductsApi.loadAllOrders()
        .then((orders) => {
            dispatch(setAllOrders({orders}));
        });
