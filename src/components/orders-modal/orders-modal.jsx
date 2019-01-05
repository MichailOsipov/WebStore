import * as React from 'react';
import {connect} from 'react-redux';
import {fetchOrders, getOrders} from 'domains/products/state';
import {OrdersView} from './orders-view';

export const Orders = connect(
    state => ({
        orders: getOrders(state)
    }),
    {
        fetchOrders
    }
)(
    class extends React.Component {
        componentDidMount() {
            this.props.fetchOrders();
        }

        render() {
            const {orders, params} = this.props;
            return (
                <div>
                    Orders
                    <OrdersView orders={orders} />
                    <button onClick={params.goTo.mainPage}>Go to mainPage</button>
                </div>
            );
        }
    }
);
