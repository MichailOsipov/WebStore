import * as React from 'react';
import {connect} from 'react-redux';
import {
    fetchAllOrders,
    getAllOrders,
    confirmOrder
} from 'domains/products/state';
import {createNewProduct} from './epic-actions';
import {AdminView} from './admin-view';

export const AdminModal = connect(
    state => ({
        allOrders: getAllOrders(state)
    }),
    {
        createNewProduct,
        fetchAllOrders,
        confirmOrder
    }
)(
    class extends React.Component {
        componentDidMount() {
            this.props.fetchAllOrders();
        }

        render() {
            const {
                createNewProduct,
                confirmOrder,
                allOrders,
                params
            } = this.props;
            const {goTo} = params;
            return (
                <AdminView
                    createNewProduct={createNewProduct}
                    allOrders={allOrders}
                    onGoMainPage={goTo.mainPage}
                    confirmOrder={confirmOrder}
                />
            );
        }
    }
);
