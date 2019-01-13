import * as React from 'react';
import {connect} from 'react-redux';
import {Grid, Typography} from '@material-ui/core';
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
                <Grid container justify="center">
                    <Grid item>
                        <Typography variant="h6">Товары в наличии:</Typography>
                    </Grid>
                    <Grid container justify="center">
                        {products.map(({id, name, imageSrc}) => (
                            <Grid item xs={2} key={id}>
                                <ProductItem
                                    name={name}
                                    imageSrc={imageSrc}
                                    onOpenProductInformation={() => onOpenProductInformation(id)}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            );
        }
    });
