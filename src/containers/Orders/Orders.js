import React, { Component } from 'react';
import axios from '../../axios-orders';

import Order from '../../components/Order/Order';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount () {
        axios.get('/orders.json')
            .them(res => {

            });
    }
    render () {
        return (
            <div>
                <Order></Order>
                <Order></Order> 
            </div>
        );
    }
}

export default Orders;