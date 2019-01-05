import * as React from 'react';
import {connect} from 'react-redux';
import {
    fetchProductsAddedToCart,
    removeProductFromCart,
    makeAnOrder,
    getProductsAddedToCart
} from 'domains/products/state';
import {ShoppingCartModalView} from './shopping-cart-modal-view';

export const ShoppingCartModal = connect(
    state => ({
        productsAddedToCart: getProductsAddedToCart(state)
    }),
    {
        fetchProductsAddedToCart,
        removeProductFromCart,
        makeAnOrder
    }
)(
    class extends React.Component {
        componentDidMount() {
            this.props.fetchProductsAddedToCart();
        }

        render() {
            const {
                productsAddedToCart,
                removeProductFromCart,
                makeAnOrder,
                params
            } = this.props;
            return (
                <ShoppingCartModalView
                    makeAnOrder={makeAnOrder}
                    productsAddedToCart={productsAddedToCart}
                    removeProductFromCart={removeProductFromCart}
                    onGoMainPage={params.goTo.mainPage}
                />
            );
        }
    }
);
