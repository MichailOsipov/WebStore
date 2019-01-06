import * as React from 'react';
import {connect} from 'react-redux';
import {Typography} from '@material-ui/core';
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
                    <Typography variant="h6">Товары в наличии:</Typography>
                    {products.map(({id, name, imageSrc}) => (
                        <ProductItem
                            key={id}
                            name={name}
                            imageSrc={imageSrc}
                            onOpenProductInformation={() => onOpenProductInformation(id)}
                        />
                    ))}
                </div>
            );
        }
    });
