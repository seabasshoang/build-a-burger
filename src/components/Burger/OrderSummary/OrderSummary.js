import React, { Component } from 'react';

import Aux from '../../../hoc/Aux';
import { Button, ButtonToolbar} from 'react-bootstrap';

class OrderSummary extends Component {

    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>:{this.props.ingredients[igKey]}
                    </li>
        });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>Here's your burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: £{this.props.price.toFixed(2)}</strong></p>
                
                <ButtonToolbar >
                    <Button 
                        bsStyle="danger"
                        onClick={this.props.modalClosed}>CANCEL</Button>
                    <Button 
                        bsStyle="success"
                        onClick={this.props.purchaseContinued}>CONTINUE</Button>
                </ButtonToolbar>
            </Aux>
        )
    }
   
}  


export default OrderSummary;