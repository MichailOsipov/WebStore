import * as React from 'react';
import {connect} from 'react-redux';
import {fetchAllOrders, getAllOrders} from 'domains/products/state';
import {createNewProduct} from './epic-actions';
import {CreateProductForm} from './create-product-form';
import {AllOrdersView} from './all-orders-view';

export const AdminModal = connect(
    state => ({
        allOrders: getAllOrders(state)
    }),
    {
        createNewProduct,
        fetchAllOrders
    }
)(
    class extends React.Component {
        componentDidMount() {
            this.props.fetchAllOrders();
        }

        render() {
            const {createNewProduct, allOrders} = this.props;
            return (
                <div>
                    <div>Страница администратора</div>
                    <CreateProductForm />
                    <button onClick={createNewProduct}>Создать новый товар</button>
                    <AllOrdersView allOrders={allOrders} />
                </div>
            );
        }
    }
);
