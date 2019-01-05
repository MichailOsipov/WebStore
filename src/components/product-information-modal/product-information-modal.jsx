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
                <div>
                    ProductInformation
                    <ProductInfoView productInfo={productInfo} />
                    <button onClick={() => addProductToCart(id)}>Добавить продукт в корзину</button>
                    <button onClick={params.goTo.shoppingCart}>Перейти в корзину</button>
                    <button onClick={params.goTo.mainPage}>Назад</button>
                </div>
            );
        }
    }
);
