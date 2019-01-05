import * as React from 'react';
import {connect} from 'react-redux';
import {getProductInfo, fetchProductInfo, addProductToCart} from 'domains/products/state';
import {ProductInfoView} from './product-info-view';

export const ProductInformation = connect(
    state => ({
        productInfo: getProductInfo(state)
    }),
    {
        fetchProductInfo,
        addProductToCart
    }
)(
    class extends React.Component {
        componentDidMount() {
            this.props.fetchProductInfo(this.props.params.entityId);
        }

        render() {
            const {
                productInfo,
                addProductToCart,
                params
            } = this.props;
            const {id} = productInfo || {};
            return (
                <ProductInfoView
                    productInfo={productInfo}
                    onGoShoppingCart={params.goTo.shoppingCart}
                    onAddProductToCart={() => addProductToCart(id)}
                    onGoMainPage={params.goTo.mainPage}
                />
            );
        }
    }
);
