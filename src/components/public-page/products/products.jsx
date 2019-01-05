import * as React from 'react';
import {connect} from 'react-redux';
import {getProducts, fetchProducts} from 'domains/products/state';
import {ProductItem} from './product-item';

export const Products = connect(
    state => ({
        products: getProducts(state)
    }),
    {
        fetchProducts
    }
)(
    class extends React.Component {
        componentDidMount() {
            this.props.fetchProducts();
        }

        render() {
            const {onOpenProductInformation, products} = this.props;
            return (
                <div>
                    Products:
                    {products.map(({id, name}) => (
                        <ProductItem
                            key={id}
                            id={id}
                            name={name}
                            onOpenProductInformation={() => onOpenProductInformation(id)}
                        />
                    ))}
                </div>
            );
        }
    });
